import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddMealComponent } from './components/meal/add-meal/add-meal.component';
import { ManageMealComponent } from './components/meal/manage-meal/manage-meal.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ManageProductComponent } from './components/product/manage-product/manage-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';

const routes: Routes = [
 {path:"admin",component:AdminComponent},
 {path:"addCategory",component:AddCategoryComponent},
 {path:"manageCategory",component:ManageCategoryComponent},
 {path:"updateCategory/:id",component:UpdateCategoryComponent},
 {path:"addMeal",component:AddMealComponent},
 {path:"manageMeal",component:ManageMealComponent},
 {path:"updateMeal/:id",component:UpdateMealComponent},
 {path:"addProduct",component:AddProductComponent},
 {path:"manageProduct",component:ManageProductComponent},
 {path:"updateProduct/:id",component:UpdateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
