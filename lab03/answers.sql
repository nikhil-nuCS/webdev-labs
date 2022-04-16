-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name
FROM users
order by last_name



-- Exercise 4
SELECT id, image_url, user_id
FROM posts
where user_id = 26


-- Exercise 5
SELECT id, image_url, user_id
FROM posts
where user_id = 26 or user_id = 12



-- Exercise 6
select count(*) from posts



-- Exercise 7
select user_id, count(*) from comments
group by user_id
order by count(*) desc



-- Exercise 8
select posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name
from posts inner join users
on posts.user_id = users.id
where users.id = 26 or users.id = 12



-- Exercise 9
with follow_nic as (
    select * from following
    where user_id = 26
)

select posts.id, posts.pub_date, follow_nic.following_id from posts
join follow_nic
on follow_nic.following_id = posts.user_id



-- Exercise 10
with follow_nic as (
    select * from following
    where user_id = 26
),
     pub_join as (
         select posts.id, posts.pub_date, follow_nic.following_id from posts
join follow_nic
on follow_nic.following_id = posts.user_id
     )

select pub_join.id, pub_join.pub_date, pub_join.following_id, users.username
from pub_join
join users
on users.id = pub_join.following_id
order by pub_date desc



-- Exercise 11
insert into bookmarks(user_id, post_id, timestamp)
values (26, 219, CURRENT_TIMESTAMP)

insert into bookmarks(user_id, post_id, timestamp)
values (26, 220, CURRENT_TIMESTAMP)

insert into bookmarks(user_id, post_id, timestamp)
values (26, 221, CURRENT_TIMESTAMP)



-- Exercise 12
delete from bookmarks
where user_id = 26
and post_id = 219

delete from bookmarks
where user_id = 26
and post_id = 220

delete from bookmarks
where user_id = 26
and post_id = 221



-- Exercise 13
update users
set email = 'knick2022@gmail.com'
where id = 26



-- Exercise 14
with nic_posts as (
    select * from posts
    where user_id = 26
),
     comm_nic as (
         select comments.post_id, count(*) as count from comments
         join nic_posts
         on nic_posts.id = comments.post_id
         group by comments.post_id
         order by count(*) desc
     )

select nic_posts.id, nic_posts.user_id, comm_nic.count, nic_posts.caption
from nic_posts join comm_nic
on nic_posts.id = comm_nic.post_id