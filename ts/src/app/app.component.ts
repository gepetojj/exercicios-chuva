import { Component } from '@angular/core';

type CommentMode = 'waiting' | 'creating' | 'created';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title =
    'Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP';
  showingMore = false;
  commentMode: CommentMode = 'waiting';
  commentCreated = false;

  toggleShowMore() {
    this.showingMore = !this.showingMore;
  }

  changeCommentMode(mode: CommentMode) {
    this.commentMode = mode;
  }

  onSubmit() {
    this.commentMode = 'created';
    this.commentCreated = true;
    return false;
  }
}
