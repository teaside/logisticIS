import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

@ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'нет'
  }];

    defaultAnswer = 'no';
    defaultCountry = 'ru';

    formData = {};
    isSubmitted = false;
  constructor() {

  }
  ngOnInit() {

  }
  submitForm() {
    this.isSubmitted = true;
    this.formData = this.form.value;
    this.form.reset();
  }
}
