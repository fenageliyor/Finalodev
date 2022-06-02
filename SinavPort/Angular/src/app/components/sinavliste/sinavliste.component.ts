import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sinavliste',
  templateUrl: './sinavliste.component.html',
  styleUrls: ['./sinavliste.component.css']
})
export class sinavlisteComponent implements OnInit {
  sinavzes: any = {
  };
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getsinavzes().subscribe(res => {
      this.sinavzes = res;
    });
  }
}
