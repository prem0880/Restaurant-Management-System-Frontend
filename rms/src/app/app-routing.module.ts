import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { ManageCountryComponent } from './components/country/manage-country/manage-country.component';
import { UpdateCountryComponent } from './components/country/update-country/update-country.component';
import { AddMealComponent } from './components/meal/add-meal/add-meal.component';
import { ManageMealComponent } from './components/meal/manage-meal/manage-meal.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ManageProductComponent } from './components/product/manage-product/manage-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { AddStateComponent } from './components/state/add-state/add-state.component';
import { ViewStateComponent } from './components/state/view-state/view-state.component';

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
 {path:"updateProduct/:id",component:UpdateProductComponent},
 {path:"addCountry",component:AddCountryComponent},
 {path:"manageCountry",component:ManageCountryComponent},
 {path:"updateCountry/:id",component:UpdateCountryComponent},
 {path:"addState",component:AddStateComponent},
 {path:"viewState",component:ViewStateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
