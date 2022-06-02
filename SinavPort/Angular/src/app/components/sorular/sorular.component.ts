import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sorus',
  templateUrl: './sorus.component.html',
  styleUrls: ['./sorus.component.css']
})
export class sorusComponent implements OnInit {
  sorus = {} ;
  sinavId;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sinavId = this.route.snapshot.paramMap.get('sinavId');
    console.log(this.sinavId);
    this.api.getsorus(this.sinavId).subscribe(res => {
      this.sorus = res;
    });
  }

}
