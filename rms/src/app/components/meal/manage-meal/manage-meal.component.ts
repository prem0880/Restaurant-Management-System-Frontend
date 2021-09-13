import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-manage-meal',
  templateUrl: './manage-meal.component.html',
  styleUrls: ['./manage-meal.component.css']
})
export class ManageMealComponent implements OnInit {

  public viewMeal?:any=[];

  constructor(private router:Router,private mealService:MealService) { }

  ngOnInit():any {
    this.mealService.getAllMeal().subscribe( response => {
      this.viewMeal = response;
      console.log(this.viewMeal);
  });
  }

  deleteMeal(id:number) {
    this.mealService.deleteMeal(id).subscribe(response => {
          console.log(response);
          window.alert(response);
  });
  }

  updateMeal(id:number) {
    this.router.navigate(["updateMeal"],{state:{id:id}});
  }

}
