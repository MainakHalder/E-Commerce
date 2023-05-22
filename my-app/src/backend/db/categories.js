import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "laptop-pc",
    description:
      "Range of gaming laptops and gaming PC",
  },
  {
    _id: uuid(),
    categoryName: "consoles",
    description:
      "Gaming console set with in-store accessories",
  },
  {
    _id: uuid(),
    categoryName: "CD-games",
    description:
      "Gaming CD for both PC and console",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    description:
      "Gaming accessories all you need",
  }
];
