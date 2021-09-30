import { Order } from "../order/order.service";
import { Product } from "../product/product.service";

export class OrderItem {
    public id?:number;
    public quantity?:number;
    public price?:number;
    public order?:Order;
    public product?:Product
}