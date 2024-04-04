import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ResumeComponent } from './resume/resume.component';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, HeaderComponent, ArticleComponent, ResumeComponent, TopicComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
