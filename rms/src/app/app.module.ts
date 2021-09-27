import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddMealComponent } from './components/meal/add-meal/add-meal.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';
import { ManageMealComponent } from './components/meal/manage-meal/manage-meal.component';
import { CategoryService } from './services/category/category.service';
import { MealService } from './services/meal/meal.service';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ManageProductComponent } from './components/product/manage-product/manage-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCategoryComponent,
    ManageCategoryComponent,
    UpdateCategoryComponent,
    AddMealComponent,
    UpdateMealComponent,
    ManageMealComponent,
    AddProductComponent,
    ManageProductComponent,
    UpdateProductComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    CategoryService,
    MealService,
    ProductService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
