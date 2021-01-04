import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Art } from "./Art";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column()
  picture: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "decimal", nullable: true })
  price: number;

  @Column({ default: false })
  is_price_visible: boolean;

  @Column()
  type: string; // TODO one-to-many types (art / books / prints / t-shirts)

  @Column({ type: "integer" })
  quantity: number;

  @Column({ type: "text", nullable: true })
  note: string;

  @Column({ default: false })
  is_visible: boolean;

  @Column({ type: "text", nullable: true })
  tags: string;

  @Column()
  status: string; // TODO one-to-many statuses ( available / sold / unavailable )

  @OneToOne((type) => Art, (art) => art.product)
  art: Art;
}
