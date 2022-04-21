import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';
import { LogoLinkComponent } from './logo-link/logo-link.component';
import { LogoComponent } from './logo/logo.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserIconComponent } from './user-icon/user-icon.component';
import { ConfirmationPageTwoComponent } from './confirmation-page-two/confirmation-page-two.component';
import { ConfirmedPageComponent } from './confirmed-page/confirmed-page.component';
import { DelegateOnsiteFormComponent } from './delegate-onsite-form/delegate-onsite-form.component';
import { ConfirmationPageOneComponent } from './confirmation-page-one/confirmation-page-one.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogoLinkComponent,
    ConfirmationFormComponent,
    UserIconComponent,
    ConfirmationPageTwoComponent,
    ConfirmedPageComponent,
    DelegateOnsiteFormComponent,
    ConfirmationPageOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
