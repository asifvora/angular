import { Component } from '@angular/core';
import { DataService } from "../app.service";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class AppComponent {
  title = 'My-app';
  data: Array<any> = [];

  constructor(private dataService: DataService) {
    dataService.getData().subscribe(
      data => {
        this.data = data.data.data;
       // console.log('this.data: ', this.data);
      },
      error => {
        console.log('error', error);
      });
  }

}
