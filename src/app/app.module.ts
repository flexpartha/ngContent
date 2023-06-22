import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReusableComponentComponent } from './reusable-component/reusable-component.component';
import { SingleslotcontentprojectionComponent } from './singleslotcontentprojection/singleslotcontentprojection.component';
import { MultislotcontentprojectionComponent } from './multislotcontentprojection/multislotcontentprojection.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableComponentComponent,
    SingleslotcontentprojectionComponent,
    MultislotcontentprojectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
