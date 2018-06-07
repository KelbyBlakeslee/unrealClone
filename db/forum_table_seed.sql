create table if not exists forum (
    id serial primary key,
    post text,
    users_id integer
);