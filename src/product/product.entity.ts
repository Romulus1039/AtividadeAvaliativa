import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderItemEntity } from "src/orderitem/orderitem.entity";

@Entity ("Product")
export class Product{
  
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Code', type: 'varchar', length: '11'})
    code: String;

    @Column({name: 'Name', type: 'varchar', length: '80'})
    name: String;

    @Column({name: 'Price', type: 'decimal'})
    price: number;

    @Column({name: 'Stock Quantity', type: 'int'})
    stockQuantity:number;


}
