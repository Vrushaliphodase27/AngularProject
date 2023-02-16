import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './components/college/college.component';
import { FiredepartmentComponent } from './component/firedepartment/firedepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    FiredepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
