import { Component } from '@angular/core';

export class SimpleService1{
  value: string;
}

@Component({
  selector: 'child',
  template: `
    <div class="child">
      <p>Child</p>
      {{service.value}}
    </div>
  `,
  styles: [
    `
    .child{
      background-color:#239CDE;
      padding: 10px; 
    }
    `
  ]
})

export class ChildComponent{
  constructor(private service: SimpleService1){}
}

@Component({
  selector: 'parent',
  template:`
    <div class="parent">
      <p> Parent </p>
      <form novalidate>
        <div class="form-group">
          <input type="text"
                  class="form-control"
                  name="value"
                  [(ngModel)] = "service.value" >                  
        </div>
      </form>
  `,
  styles: [
    `
    .parent{
      background-color:#D1E751;
      padding: 10px;
    }
    `
  ],
  //viewProviders:[SimpleService1]
  providers: [SimpleService1]
})

export class ParentComponent{

  constructor(private simpleService: SimpleService1){}
}