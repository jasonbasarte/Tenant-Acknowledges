import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";
import { ConfirmationPageOneComponent } from './confirmation-page-one/confirmation-page-one.component';
import { ConfirmationPageTwoComponent } from "./confirmation-page-two/confirmation-page-two.component";
import { ConfirmedPageComponent } from "./confirmed-page/confirmed-page.component";
import { DelegateOnsiteFormComponent } from './delegate-onsite-form/delegate-onsite-form.component';
import { TenantConfirmationComponent } from './tenant-confirmation/tenant-confirmation.component';


const routes: Routes = [
  {
    path: "",
    component: TenantConfirmationComponent
  },
  {
    path: "home",
    component: ConfirmationFormComponent
  },
  {
    path: "confirmation-page-one",
    component: ConfirmationPageOneComponent
  },
  {
    path: "confirmation-page-two",
    component: ConfirmationPageTwoComponent
  },
  {
    path: "confirmed",
    component: ConfirmedPageComponent
  },
  {
    path: "delegate-onsite",
    component: DelegateOnsiteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
