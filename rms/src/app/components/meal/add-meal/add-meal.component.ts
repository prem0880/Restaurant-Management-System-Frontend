import { Component, OnInit } from '@angular/core';
import { Meal, MealService } from 'src/app/services/meal/meal.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  submitted:boolean=false;

  constructor(private mealService:MealService,private toast:NotificationService) { }

  ngOnInit(): void {
  }

  addMeal(meal:Meal) {
    this.mealService.createMeal(meal).subscribe((response) => {


      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }



    });
    
  }
}
