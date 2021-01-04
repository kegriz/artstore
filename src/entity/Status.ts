import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity({ name: "statuses" })
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string; // ( available / sold / unavailable )

  // eslint-disable-next-line
  @OneToMany((type) => Product, (product) => product.status)
  products: Product[];
}
