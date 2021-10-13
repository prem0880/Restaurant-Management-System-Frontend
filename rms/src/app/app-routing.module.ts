import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/address/add-address/add-address.component';
import { UpdateAddressComponent } from './components/address/update-address/update-address.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { ManageCountryComponent } from './components/country/manage-country/manage-country.component';
import { UpdateCountryComponent } from './components/country/update-country/update-country.component';
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
import { ViewOrderComponent } from './components/customer/order/view-order/view-order.component';
import { ViewOrdersComponent } from './components/customer/order/view-orders/view-orders.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { ViewCustomerComponent } from './components/customer/view-customer/view-customer.component';
import { ViewProfileComponent } from './components/customer/view-profile/view-profile.component';
import { ManageOrderComponent } from './components/customer/order/manage-order/manage-order.component';
import { CreateOrderComponent } from './components/customer/create-order/create-order.component';

const routes: Routes = [
//{path : '', redirectTo : 'login', pathMatch : 'full'},

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
 {path:"viewProduct",component:ViewProductComponent},
 {path:"addCountry",component:AddCountryComponent},
 {path:"manageCountry",component:ManageCountryComponent},
 {path:"updateCountry/:id",component:UpdateCountryComponent},
 {path:"addState",component:AddStateComponent},
 {path:"viewState",component:ViewStateComponent},
 {path:"viewCustomer",component:ViewCustomerComponent},
 {path:"viewProfile",component:ViewProfileComponent},
 {path:"addAddress/:id",component:AddAddressComponent},
 {path:"updateAddress",component:UpdateAddressComponent},
 {path:"signUp",component:SignupComponent},
 {path:"login",component:LoginComponent},
 {path:"dashboard",component:DashboardComponent},
 {path:"addOrder/:id",component:AddOrderComponent},
 {path:"processOrder",component:ProcessOrderComponent},
 {path:"viewOrders",component:ViewOrderComponent},
 {path:"viewAllOrder",component:ViewOrdersComponent},
 {path:"manageOrder",component:ManageOrderComponent},
 {path:"createOrder/:id",component:CreateOrderComponent},
 {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
