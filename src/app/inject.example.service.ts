import {NgModule, Component, Injectable, Inject, TypeDecorator} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

export class OtherService {
  constructor(){};
}

// This version doesn't work as Angular doesn't know it should be injecting
//otherService
// class SimpleService{
//   otherService: OtherService;
//   constructor(otherService: OtherService){
//     this.otherService = otherService;
//   };
// }

// This version works but we have to decorate every parameter to our constructor with @Inject
// class SimpleService{
//   otherService: OtherService;
//   constructor(@Inject(OtherService)otherService: OtherService){
//     this.otherService = otherService;
//   };
// }

// This works because @Injectable automatically injects every parameter to the constructor as long as that parameter has a type
@Injectable()
export class SimpleService{
  otherService: OtherService;
  constructor(otherService: OtherService){
    this.otherService = otherService;
  };
}

// This DOESN'T work because the otherService parameter doesn't have a type
// @Injectable()
// class SimpleService{
//   otherService: OtherService;
//   constructor(otherService: any){
//     this.otherService = otherService;
//   };
// }

@Component({
  selector: 'simple',
  template: `
    <p> Simple is as simple</p>
  `
})

export class SimpleComponent{
  constructor(private simpleService: SimpleService){}
}