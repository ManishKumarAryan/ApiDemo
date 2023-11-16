import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api';
  
  constructor() {
    this.fetchData(this.url)

  }

  data:any;
  url="https://fakestoreapi.com/products";

  fetchData(url: string) {
    fetch(url).then((response) => {
      console.log(response); return response.json()}).then((data) => {
        this.data = data;
      })
    .catch((err)=>alert(err))
  }
}
