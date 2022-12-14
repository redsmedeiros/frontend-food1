import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = []

  constructor(private foodService: FoodService, activateRoute: ActivatedRoute) { //activated route escuta as mudanças de params

    //toda vez que o parametro mudar chame a função dentro do subscribe
    activateRoute.params.subscribe( (params) =>{
      if(params['searchTerm'])
      this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
      else if(params['tag'])
      this.foods = this.foodService.getAllFoodsByTag(params['tag'])
      else
      this.foods = foodService.getAll()
    })

    //preenchendo o array: primeiro verifico se tem parametro, se tiver, executa a lógicas

    //44:55

  }

  ngOnInit(): void {
  }

}
