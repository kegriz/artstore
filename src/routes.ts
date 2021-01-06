import { UserController } from "./controller/UserController";
import { CategoryController } from "./controller/CategoryController";
import { StatusController } from "./controller/StatusController";
import { TypeController } from "./controller/TypeController";
import { ProductController } from "./controller/ProductController";
import { ArtController } from "./controller/ArtController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "get",
    route: "/categories",
    controller: CategoryController,
    action: "all",
  },
  {
    method: "get",
    route: "/statuses",
    controller: StatusController,
    action: "all",
  },
  {
    method: "get",
    route: "/types",
    controller: TypeController,
    action: "all",
  },
  {
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "all",
  },
  {
    method: "get",
    route: "/products/:id",
    controller: ProductController,
    action: "one",
  },
  {
    method: "get",
    route: "/arts",
    controller: ArtController,
    action: "all",
  },
  {
    method: "get",
    route: "/arts/:id",
    controller: ArtController,
    action: "one",
  },
];
