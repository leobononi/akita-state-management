import { ID } from "@datorama/akita";

export interface ShoppingCartModel{
    id: ID,
    description: string,
    number: number,
    price: number
}