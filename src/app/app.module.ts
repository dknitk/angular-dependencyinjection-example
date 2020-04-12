import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OtherService, SimpleService, SimpleComponent } from './inject.example.service';
import { SimpleService1, ChildComponent, ParentComponent } from './services.providers.example';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SimpleComponent, ChildComponent, ParentComponent  ],
  providers: [OtherService, SimpleService, SimpleService1],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
