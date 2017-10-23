import { DataService } from './../../services/data.service';
import { Question } from './../../models/Question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question:Question;
  constructor(public data: DataService) { }

  ngOnInit() {
  }

  removeQuestion(question:Question){
    this.data.removeQuestion(question);
  }

}
