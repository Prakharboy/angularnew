import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
 @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(myinput)
  {
    this.childEvent.emit(myinput);
  }

}
