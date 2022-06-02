import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinav',
  templateUrl: './sinav.component.html',
  styleUrls: ['./sinav.component.css']
})
export class sinavComponent implements OnInit {

  sinav: any = {} ;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.sinavSelected.subscribe(sinav => this.sinav = sinav);
  }

  Post(sinav) {
    console.log(sinav);
    this.api.postsoru(sinav);
  }

}
