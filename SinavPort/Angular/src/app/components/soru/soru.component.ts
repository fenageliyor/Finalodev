import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soru',
  templateUrl: './soru.component.html',
  styleUrls: ['./soru.component.css']
})
export class soruComponent implements OnInit {

  soru: any = {} ;
  sinavId;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sinavId = this.route.snapshot.paramMap.get('sinavId');
    console.log(this.sinavId);
    this.api.soruSelected.subscribe(soru => this.soru = soru);
  }

  Post(soru) {
    soru.sinavId = this.sinavId;
    console.log(soru);
    this.api.postsoru(soru);
  }

}
