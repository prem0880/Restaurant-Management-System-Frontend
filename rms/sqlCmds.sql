create database rms;

use rms;

show tables;

select * from category;

select * from meal;

select * from product;

select * from state;

select * from country;

select * from customer;

select * from address;

select * from orders;

select * from order_item;

select * from login;

desc login;

truncate table login;

SELECT * FROM Login  WHERE email="prem91@gmail.com";

SELECT SUM(o.price) FROM order_item o WHERE o.order_id=35;

truncate table orders;

truncate table order_item;

delete from orders where id=11;

delete from order_item where id=12;


select * from Login  where email_id="yo";

drop database rms;