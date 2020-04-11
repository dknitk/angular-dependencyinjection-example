import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OtherService, SimpleService, SimpleComponent } from './inject.example.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SimpleComponent  ],
  providers: [OtherService, SimpleService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
