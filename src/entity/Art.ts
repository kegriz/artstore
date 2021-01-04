import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
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

  @Column()
  categories: string; // many-to-many ? ()

  @OneToOne((type) => Product, (product) => product.art)
  @JoinColumn()
  product: Product;
}
