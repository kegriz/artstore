import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinColumn } from "typeorm";
import { Product } from "./Product";
import { Category } from "./Category";

@Entity({ name: "arts" })
export class Art {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: true })
  art_id: string;

  @Column({ type: "integer", nullable: true })
  height: number;

  @Column({ type: "integer", nullable: true })
  width: number;

  @Column({ type: "integer", nullable: true })
  depth: number;

  @Column({ type: "text", nullable: true })
  date: string;

  @Column({ type: "text", nullable: true })
  technique: string;

  // eslint-disable-next-line
  @ManyToMany((type) => Category, (category) => category.arts)
  categories: Category[];

  @OneToOne((type) => Product, (product) => product.art) // eslint-disable-line
  @JoinColumn()
  product: Product;
}
