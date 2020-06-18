import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  MessageToChild: string = "";
  MessageFromChild: string = "";
  @ViewChild(ChildComponent) childComponentObj: ChildComponent;
  constructor() { }

  ngOnInit() {
  }
  parentComponentMethod() {
    this.childComponentObj.childComponentMethod();
  }
  parentComponentMethodWithParams() {
    this.childComponentObj.childComponentMethodWithParameters(this.MessageToChild);
  }
  getMessage(message: string) {
    this.MessageFromChild = message;
  }

}
