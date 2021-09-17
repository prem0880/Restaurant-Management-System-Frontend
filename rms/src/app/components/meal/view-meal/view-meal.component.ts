import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal/meal.service';

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.css']
})
export class ViewMealComponent implements OnInit {

  public viewMeal?:any=[];

  constructor(private mealService:MealService) { }


  ngOnInit():any {
    this.mealService.getAllMeal().subscribe( response => {
      this.viewMeal = response;
  });
  }

}
