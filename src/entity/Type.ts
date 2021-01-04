import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity({ name: "types" })
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string; // (arts, books, prints)

  // eslint-disable-next-line
  @OneToMany((type) => Product, (product) => product.type)
  products: Product[];
}
