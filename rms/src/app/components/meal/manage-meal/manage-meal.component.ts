import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal/meal.service';

@Component({
  selector: 'app-manage-meal',
  templateUrl: './manage-meal.component.html',
  styleUrls: ['./manage-meal.component.css']
})
export class ManageMealComponent implements OnInit {

  viewMeal?:any=[];

  constructor(private router:Router,private mealService:MealService) { }

  ngOnInit():any {
    this.reloadData(); 

  }

  reloadData(){
    this.mealService.getAllMeal().subscribe( response => {
      this.viewMeal = response;
  });
  }

  deleteMeal(id:number) {
    this.mealService.deleteMeal(id).subscribe(response => {
          window.alert(response);
          this.reloadData();
        },
        error =>  window.alert(error.error));
  }

  updateMeal(id:number) {
    this.router.navigate(["/updateMeal",id]);
  }

}
