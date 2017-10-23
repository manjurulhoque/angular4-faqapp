import { Question } from './../../models/Question';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questions:Question[];

  constructor(private data:DataService) {
    this.questions = this.data.getQuestions();
  }

  ngOnInit() {
  }

  addQuestion(question:Question){
    this.data.addQuestion(question);
  }
}
