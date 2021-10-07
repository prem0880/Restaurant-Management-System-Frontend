import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeConverterService {

  time!:string;
  constructor() { }

  getTime():string{
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
        console.log('Breakfast')
        this.time="Breakfast"
    } else if (curHr < 18) {
        console.log('Lunch')
        this.time="Lunch"
    } else {
      console.log('Dinner')
      this.time="Dinner"
    }
    return this.time;
  }
}
