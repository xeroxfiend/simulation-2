create table houses (
    house_id serial primary key,
    name varchar(100),
    address varchar,
    city varchar(100),
    state varchar(50),
    zipcode int
);

insert into houses (name, address, city, state, zipcode)
values ('My house', '123 coolstreet', 'Orem', 'UT', 84609),
('Friend house', '123 notascoolstreet', 'Porem', 'AZ', 84569),
('Enemy house', '123 lamestreet', 'Dorem', 'ID', 88769);

select * from houses