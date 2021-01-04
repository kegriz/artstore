import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Art } from "./Art";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  // eslint-disable-next-line
  @ManyToMany((type) => Art, (art) => art.categories)
  @JoinTable()
  arts: Art[];
}
