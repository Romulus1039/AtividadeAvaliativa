import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OrderByCondition } from "typeorm";
import { OrderEntity } from "src/order/order.entity";

@Entity ("Customer")
export class Customer{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Name', type: 'varchar', length: '80'})
    name: String;

    @Column({name: 'Cpf', type: 'varchar', length: '15'})
    cpf: String;

    @Column({name: 'Address', type: 'varchar', length: '80'})
    address: String;
    
    @OneToMany(type => order, order => order.Customer)
    pedido: Array<Order>;

}



