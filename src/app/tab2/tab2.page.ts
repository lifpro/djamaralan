import { Component } from '@angular/core';
import { Search } from '../models/search';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  imgUrl = "../assets/img/logo.png";
  item: Search;
  constructor() {
    this.item = new Search();
    this.item.cycle = "M";
  }

  search() {
    alert(JSON.stringify(this.item))
  }


}
