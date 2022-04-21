import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";
import { ConfirmationPageTwoComponent } from "./confirmation-page-two/confirmation-page-two.component";
import { ConfirmedPageComponent } from "./confirmed-page/confirmed-page.component";
const routes: Routes = [
  {
    path: "",
    component: ConfirmationFormComponent
  },
  {
    path: "confirmation-page-two",
    component: ConfirmationPageTwoComponent
  },
  {
    path: "confirmed",
    component: ConfirmedPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
