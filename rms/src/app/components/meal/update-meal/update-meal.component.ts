import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, MealService } from 'src/app/services/meal/meal.service';

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrls: ['./update-meal.component.css']
})
export class UpdateMealComponent implements OnInit {

  id?:any;

  constructor(private router:Router,private mealService:MealService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      id : any
    };
    this.id = state.id;
    console.log(this.id);
  }

  ngOnInit(): void {
  }

  updateMeal(meal:Meal) {
    this.mealService.updateMeal(this.id,meal).subscribe((response) => {
      window.alert(response);
    });
  }
}
