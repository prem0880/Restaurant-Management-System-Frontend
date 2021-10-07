import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, MealService } from 'src/app/services/meal/meal.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-manage-meal',
  templateUrl: './manage-meal.component.html',
  styleUrls: ['./manage-meal.component.css']
})
export class ManageMealComponent implements OnInit {

  viewMeal!:Meal[];

  constructor(private router:Router,private toast:NotificationService,private mealService:MealService) { }

  ngOnInit():any {
    this.reloadData(); 

  }

  reloadData(){
    this.mealService.getAllMeal().subscribe( response => {
      this.viewMeal = response.data;
  });
  }

  deleteMeal(id:number) {
    this.mealService.deleteMeal(id).subscribe(response => {
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
   }
  else{
     this.toast.showFailure(response.message);
   }

         this.reloadData();
        });
  }

  updateMeal(id:number) {
    this.router.navigate(["/updateMeal",id]);
  }

}
