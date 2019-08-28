import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }
  
  

  ngOnInit() {
   
  }
wtc(name)
{
  console.log(name);
}

}
