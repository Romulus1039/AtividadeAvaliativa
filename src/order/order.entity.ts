import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from 'src/order/order.entity';
import { CustomerEntity } from 'src/customer/customer.entity';

@Entity()
export class extends OrderService {
    id : number
    orderNumber :  string
    orderDate: Date
    total : number
    customer: Customer
    
    constructor(private authorRepository: OrderRepository) {}
}