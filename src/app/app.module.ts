import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponenet } from './Employee/employee.component.';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { Parent1inputdecoratorComponent } from './parent1inputdecorator/parent1inputdecorator.component';
import { Child1inputdecoratorComponent } from './child1inputdecorator/child1inputdecorator.component';
import { Parent1outputdecoratorComponent } from './parent1outputdecorator/parent1outputdecorator.component';
import { Child1outputdecoratorComponent } from './child1outputdecorator/child1outputdecorator.component';
import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './summary.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HttpmethodComponent } from './httpmethod/httpmethod.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemotdfComponent } from './demotdf/demotdf.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponenet,
    StudentComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    TwowaydatabindingComponent,
    Eventbinding3Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    Parent1inputdecoratorComponent,
    Child1inputdecoratorComponent,
    Parent1outputdecoratorComponent,
    Child1outputdecoratorComponent,
    InbuiltpipeComponent,
    CustompipeComponent,
    SummaryPipe,
    HttpmethodComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    FollowerComponent,
    MyfollowerComponent,
    NotfoundComponent,
    DemotdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
