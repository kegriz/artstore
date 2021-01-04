import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm";
import { Art } from "./Art";
import { Status } from "./Status";

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

  // eslint-disable-next-line
  @ManyToOne(type => Status, status => status.products)
  status: Status;

  // eslint-disable-next-line
  @OneToOne((type) => Art, (art) => art.product, {
    cascade: true,
  })
  art: Art;
}
