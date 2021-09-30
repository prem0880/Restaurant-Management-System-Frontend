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

SELECT SUM(o.price) FROM order_item o WHERE o.order_id=19;

truncate table orders;

truncate table order_item;

delete from orders where id=19;

delete from order_item where id=6;


drop database rms;