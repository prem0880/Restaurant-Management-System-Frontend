import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { AddStateComponent } from './components/state/add-state/add-state.component';
import { ViewStateComponent } from './components/state/view-state/view-state.component';
import { StateService } from './services/state/state.service';
import { CountryService } from './services/country/country.service';
import { ManageCountryComponent } from './components/country/manage-country/manage-country.component';
import { UpdateCountryComponent } from './components/country/update-country/update-country.component';
import { AddAddressComponent } from './components/address/add-address/add-address.component';
import { AddressService } from './services/address/address.service';
import { CustomerService } from './services/customer/customer.service';
import { UpdateAddressComponent } from './components/address/update-address/update-address.component';
import { SignupComponent } from './components/customer/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/customer/dashboard/dashboard.component';
import { AddOrderComponent } from './components/customer/order/add-order/add-order.component';
import { ProcessOrderComponent } from './components/customer/order/process-order/process-order.component';
import { OrderService } from './services/order/order.service';
import { ViewOrderComponent } from './components/customer/order/view-order/view-order.component';
import { ViewOrdersComponent } from './components/customer/order/view-orders/view-orders.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { ViewCustomerComponent } from './components/customer/view-customer/view-customer.component';
import { ViewProfileComponent } from './components/customer/view-profile/view-profile.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageOrderComponent } from './components/customer/order/manage-order/manage-order.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { CreateOrderComponent } from './components/customer/create-order/create-order.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    AddCountryComponent,
    AddStateComponent,
    ViewStateComponent,
    ManageCountryComponent,
    UpdateCountryComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    AddOrderComponent,
    ProcessOrderComponent,
    ViewOrderComponent,
    ViewOrdersComponent,
    ViewProductComponent,
    ViewCustomerComponent,
    ViewProfileComponent,
    ManageOrderComponent,
    CreateOrderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,  
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    JwPaginationModule,
    Ng2SearchPipeModule

  ],
  providers: [
    CategoryService,
    MealService,
    ProductService,
    StateService,
    CountryService,
    AddressService,
    CustomerService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
