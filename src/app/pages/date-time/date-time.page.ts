import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customPickerOptions = {
    buttons: [{
      text: 'Save',
      handler: (event) => console.log(event)
      },
      {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }
  ]};

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(new Date(event.detail.value) );
  }

}
