insert into unrealUsers 
(auth_id, username)
values 
($1, $2)
returning *;