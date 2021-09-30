import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/address/add-address/add-address.component';
import { ManageAddressComponent } from './components/address/manage-address/manage-address.component';
import { UpdateAddressComponent } from './components/address/update-address/update-address.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { ManageCountryComponent } from './components/country/manage-country/manage-country.component';
import { UpdateCountryComponent } from './components/country/update-country/update-country.component';
import { ManageCustomerComponent } from './components/customer/manage-customer/manage-customer.component';
import { UpdateCustomerComponent } from './components/customer/update-customer/update-customer.component';
import { LoginComponent } from './components/login/login.component';
import { AddMealComponent } from './components/meal/add-meal/add-meal.component';
import { ManageMealComponent } from './components/meal/manage-meal/manage-meal.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ManageProductComponent } from './components/product/manage-product/manage-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { SignupComponent } from './components/customer/signup/signup.component';
import { AddStateComponent } from './components/state/add-state/add-state.component';
import { ViewStateComponent } from './components/state/view-state/view-state.component';
import { DashboardComponent } from './components/customer/dashboard/dashboard.component';
import { AddOrderComponent } from './components/customer/order/add-order/add-order.component';
import { ProcessOrderComponent } from './components/customer/order/process-order/process-order.component';

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
 {path:"viewState",component:ViewStateComponent},
 {path:"manageCustomer",component:ManageCustomerComponent},
 {path:"updateCustomer/:id",component:UpdateCustomerComponent},
 {path:"addAddress/:id",component:AddAddressComponent},
 {path:"manageAddress",component:ManageAddressComponent},
 {path:"updateAddress/:id",component:UpdateAddressComponent},
 {path:"signUp",component:SignupComponent},
 {path:"login",component:LoginComponent},
 {path:"dashboard",component:DashboardComponent},
 {path:"addOrder/:id",component:AddOrderComponent},
 {path:"processOrder",component:ProcessOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
