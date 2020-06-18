import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() MessageFromParent: string = "";
  @Output() MessageToParent = new EventEmitter<string>();
  MessageToParentContents: string = "";
  constructor() { }

  ngOnInit() {
  }


  childComponentMethod() {
    alert("Child component Called");
  }
  sendMessageToParent() {
    this.MessageToParent.emit(this.MessageToParentContents);
  }
  childComponentMethodWithParameters(message: string) {
    alert(message);
  }

}
