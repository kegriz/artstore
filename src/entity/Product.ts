import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column()
  picture: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "decimal" })
  price: number;

  @Column()
  is_price_visible: boolean;

  @Column()
  type: string; // TODO on-to-many types (art / books / prints / t-shirts)

  @Column({ type: "integer" })
  quantity: number;

  @Column({ type: "text" })
  note: string;

  @Column()
  is_visible: boolean;

  @Column({ type: "text" })
  tags: string;

  @Column()
  status: string; // TODO on-to-many statuses ( available / sold / unavailable )
}
