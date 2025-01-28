import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csvParser';
  parsedData: any;

  constructor(private papa: Papa) {
  }

  uploadFile(event: any){
    this.papa.parse(event.target.files[0],{
      complete: (result: any) => {
          console.log('Parsed data results: ', result);
          this.parsedData = result.data;
      }
    });
  }
}
