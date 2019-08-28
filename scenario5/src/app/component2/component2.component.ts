import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public inputt="test";

  constructor() { }
 
  public mmessage="NULLmidd";

  @Output() childEvent = new EventEmitter();

  ngOnInit() {
  }

  fireEvent(inputtt)
  { this.mmessage=inputtt;
    
    this.childEvent.emit(this.mmessage);
  }

}
