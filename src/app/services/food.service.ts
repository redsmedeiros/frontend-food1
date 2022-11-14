import { sample_food, sample_tags } from './../../data';
import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

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

  getAllTags(): Tag[]{

    return sample_tags
  }

  getAllFoodsByTag(tag: string): Food[]{

    return tag === 'All' ? this.getAll() : this.getAll().filter( food => food.tags?.includes(tag))
  }

  //passar id como parametro e retorna um obj food com esse id
  getFoodById(foodId: string): Food{
    return this.getAll().find( food => food.id == foodId) ?? new Food()
  }
}
