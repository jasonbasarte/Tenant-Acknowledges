import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";
const routes: Routes = [
  {
    path: "",
    component: ConfirmationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
