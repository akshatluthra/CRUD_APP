import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiDataCollectionService } from './api-data-collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList: any = [];

  constructor(private apiData: ApiDataCollectionService, private loader: NgxSpinnerService){
  }
  ngOnInit(){
    this.loader.show();
    setTimeout(()=> {
      this.apiData.getApiData().subscribe((res) => {
        this.userList = res;
        this.loader.hide();
      })
    },5000)
  }
}
