import { FoodService } from './../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {

    //quando o valor do parametro mudar vai executar o codigo com o novo params
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
