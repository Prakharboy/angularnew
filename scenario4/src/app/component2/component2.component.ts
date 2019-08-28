import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public childEvent=new EventEmitter();
  @Input('parentData') namej;
  constructor() { }

  ngOnInit() {
  }

  fireEvent(myinput)
  {
    this.childEvent.emit(myinput);
  }

}
