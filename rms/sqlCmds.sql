create database rms;

use rms;

show tables;

select * from category;

select * from meal;

desc product;

select * from product;

select * from state;

select * from country;

select * from customer;

select * from address;


select * from login;

insert into login(email,password,role) values("admin@gmail.com","admin","Admin");

desc login;

truncate table login;

SELECT * FROM Login  WHERE email="prem91@gmail.com";

SELECT SUM(o.price) FROM order_item o WHERE o.order_id=35;

truncate table orders;

truncate table order_item;

select * from orders;

select * from order_item;

delete from orders where id=27;

delete from order_item where id=21;


select * from Login  where email_id="yo";

drop database rms;