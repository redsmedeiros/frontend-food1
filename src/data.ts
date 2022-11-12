import { Food } from "./app/shared/models/Food";

//exportar o array com obejtos do tipo food

export const sample_food: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 11,
    cookTime: '40min',
    favorite: false,
    origins: ['Italia'],
    stars: 3.0,
    imageUrl: 'assets/p1.jpg',
    tags: ['Pizza', 'Massa']
  },
  {
    id: '2',
    name: 'Lasanha',
    price: 12,
    cookTime: '40min',
    favorite: true,
    origins: ['Italia'],
    stars: 3.5,
    imageUrl: 'assets/p2.jpg',
    tags: ['Lasanha', 'Massa']
  }
]
