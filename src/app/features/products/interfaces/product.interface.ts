import { ICategory } from "@features/categories";

export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly images: string[];
  readonly creationAt: string;
  readonly updatedAt: string;
  readonly category: ICategory;
  count?: number;
}
