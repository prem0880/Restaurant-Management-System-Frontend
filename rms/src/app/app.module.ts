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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ManageCategoryComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
