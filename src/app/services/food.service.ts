import { sample_food } from './../../data';
import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //metodo retorna nosso array de objetos food
  getAll(): Food[]{

    return sample_food
  }

  //metodo retorna um array de objetos foods filtrado pelo nome que inclui o termo de busca
  getAllFoodsBySearchTerm(searchTerm: string): Food[]{

    return  this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
  }
}
