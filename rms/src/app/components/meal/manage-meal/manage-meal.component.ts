import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Meal, MealService } from 'src/app/services/meal/meal.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-manage-meal',
  templateUrl: './manage-meal.component.html',
  styleUrls: ['./manage-meal.component.css']
})
export class ManageMealComponent implements OnInit {
  modalOptions: NgbModalOptions; //modal options such as backdrop, backdropClass
  

  viewMeal!:Meal[];

  constructor(private router:Router,private toast:NotificationService,private modalService:NgbModal,private mealService:MealService) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop', }
   }

  ngOnInit():any {
    this.reloadData(); 

  }

  reloadData(){
    this.mealService.getAllMeal().subscribe( response => {
      this.viewMeal = response.data;
  });
  }

  deleteMeal(content: any, id: number) {

    this.modalService.open(content, this.modalOptions).result.then(

      () => {
        this.mealService.deleteMeal(id).subscribe(response => {
          if(response.statusCode==200){
            this.toast.showSuccess(response.message);
       }
      else{
         this.toast.showFailure(response.message);
       }
    
             this.reloadData();
            });
    
      },

      (reason) => {} //to catch the promise rejection

    );

  }

  updateMeal(id:number) {
    this.router.navigate(["/updateMeal",id]);
  }

}
