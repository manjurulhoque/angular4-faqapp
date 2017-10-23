import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionlistComponent } from './components/questionlist/questionlist.component';
import { QuestionComponent } from './components/question/question.component';
import { AddquestionComponent } from './components/addquestion/addquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionlistComponent,
    QuestionComponent,
    AddquestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
