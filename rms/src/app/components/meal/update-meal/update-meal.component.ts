import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal, MealService } from 'src/app/services/meal/meal.service';

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrls: ['./update-meal.component.css']
})
export class UpdateMealComponent implements OnInit {

  submitted:boolean=false;
  id?:any;
  meal?:any;
  constructor(private router:Router,private route:ActivatedRoute,private mealService:MealService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mealService.getMealById(this.id).subscribe((response)=>{
        this.meal=response.data;
    },error=>console.log(error));

  }

  updateMeal(meal:Meal) {
    this.mealService.updateMeal(this.id,meal).subscribe((response) => {
      window.alert(response.message);
      this.goToList();
    },error=>window.alert(error.error));
  }

  goToList(){
    this.router.navigate(['manageMeal']);
  }
}
