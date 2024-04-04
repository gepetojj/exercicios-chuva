import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {
  constructor() {}
  showingMore = false;

  toggleShowMore() {
    this.showingMore = !this.showingMore;
  }

  ngOnInit(): void {}
}
