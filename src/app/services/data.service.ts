import { Question } from './../models/Question';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() {
    this.questions = [
      {
        text: "What is your name?",
        answer: "My name is Rumi",
        hide: true
      },
      {
        text: "What is your first school?",
        answer: "My name is hehe",
        hide: true
      },
      {
        text: "What is your language?",
        answer: "My name is Python",
        hide: true
      }
    ]
  }

  getQuestions()
  {
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question); // add at the begining
  }

  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
      }
    }
  }
}
