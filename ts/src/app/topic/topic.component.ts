import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
})
export class TopicComponent implements OnInit {
  @Input() isWaiting: boolean = false;
  constructor() {}
  isOpen = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
}
