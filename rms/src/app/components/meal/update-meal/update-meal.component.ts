import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal, MealService } from 'src/app/services/meal/meal.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrls: ['./update-meal.component.css']
})
export class UpdateMealComponent implements OnInit {

  submitted:boolean=false;
  id!:number;
  meal!:Meal;
  constructor(private router:Router,private route:ActivatedRoute,private toast:NotificationService,private mealService:MealService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mealService.getMealById(this.id).subscribe((response)=>{
        this.meal=response.data;
    },error=>console.log(error));

  }

  updateMeal(meal:Meal) {
    this.mealService.updateMeal(this.id,meal).subscribe((response) => {
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
   }
  else{
     this.toast.showFailure(response.message);
   }
      this.goToList();
    });
  }

  goToList(){
    this.router.navigate(['manageMeal']);
  }
}
