'''
To test: python3 -m websockets ws://localhost:8081/
Then paste one of the following messages:
    * { "type": "login", "username": "walter" }
    * { "type": "disconnect" }
    * { "type": "chat", "text": "Hello world!", "username": "walter" }
    
'''

from dotenv import load_dotenv
load_dotenv()

import asyncio
import websockets
import json
import os

logged_in_users = dict()

PORT = os.environ.get('PORT') or os.environ.get('WS_PORT') or 8081

async def respond_to_message(websocket, message):
    try:
        data = json.loads(message)
    except:
        data = { 
            'error': 'error decoding {0}'.format(message),
            'details': 'See instructions for list of valid message formats.'}
        return await websocket.send(json.dumps(data))
    
    message_to_send = {}
    if data.get("type") == "login":
        logged_in_users[websocket] = data.get('username')
        message_to_send["type"] = "login"
        message_to_send["active_users"] =  list(logged_in_users.values())
        message_to_send["user_joined"] = data.get("username")
    elif data.get("type") == "disconnect":
        del logged_in_users[websocket]
        message_to_send["type"] = "disconnect"
        message_to_send["active_users"] =  list(logged_in_users.values())
        message_to_send["user_left"] = data.get("username")
    elif data.get("type") == "chat":
        message_to_send = data
    else:
        message_to_send["Unrecognized message type"] = data

    # await websocket.send(json.dumps(data))
    for sock in logged_in_users:
        # TODO: replace "data" with a message that conforms to
        # the specs above:
        await sock.send(json.dumps(message_to_send))


async def broadcast_messages(websocket, path):
    try:
        async for message in websocket:
            await respond_to_message(websocket, message)
    except websockets.ConnectionClosed as e:
        print('A client just disconnected')
        print(e)
    finally:
        if logged_in_users.get(websocket):
            del logged_in_users[websocket]
    

async def main():
    async with websockets.serve(broadcast_messages, "", PORT):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    print('Starting web socket server...')
    print('ws://localhost:{0}'.format(PORT))
    asyncio.run(main())