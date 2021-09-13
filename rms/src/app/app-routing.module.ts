import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
 {path:"addCategory",component:AddCategoryComponent},
 {path:"viewCategory",component:ViewCategoryComponent},
 {path:"manageCategory",component:ManageCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
