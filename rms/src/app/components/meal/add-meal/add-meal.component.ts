import { Component, OnInit } from '@angular/core';
import { Meal, MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  constructor(private mealService:MealService) { }

  ngOnInit(): void {
  }

  addMeal(meal:Meal) {
    console.log(meal);
    this.mealService.createMeal(meal).subscribe((response) => {
      window.alert(response);
    })
  }
}
