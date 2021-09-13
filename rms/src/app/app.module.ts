import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddMealComponent } from './components/meal/add-meal/add-meal.component';
import { ViewMealComponent } from './components/meal/view-meal/view-meal.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';
import { ManageMealComponent } from './components/meal/manage-meal/manage-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ManageCategoryComponent,
    UpdateCategoryComponent,
    AddMealComponent,
    ViewMealComponent,
    UpdateMealComponent,
    ManageMealComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
