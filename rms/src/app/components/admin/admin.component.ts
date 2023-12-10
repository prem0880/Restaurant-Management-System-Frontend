import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private toaster:NotificationService) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.toaster.showSuccess("Logged out Successfully");
    this.router.navigate(['login']);
  }
}
