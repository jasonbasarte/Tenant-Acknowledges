import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";
import { ConfirmationPageTwoComponent } from "./confirmation-page-two/confirmation-page-two.component";
const routes: Routes = [
  {
    path: "",
    component: ConfirmationFormComponent
  },
  {
    path: "confirmation-page-two",
    component: ConfirmationPageTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
