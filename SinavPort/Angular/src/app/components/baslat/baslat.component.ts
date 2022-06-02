import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-baslat',
  templateUrl: './baslat.component.html',
  styleUrls: ['./baslat.component.css']
})
export class baslatComponent implements OnInit {
  sinavzes: any = {
  };
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getAllSinavzes().subscribe(res => {
      this.sinavzes = res;
    });
  }

}
