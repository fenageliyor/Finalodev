import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SonucComponent } from './../Sonuc/Sonuc.component';


@Component({
  selector: 'app-baslat-Sinav',
  templateUrl: './baslat-Sinav.component.html',
  styleUrls: ['./baslat-Sinav.component.css']
})
export class baslatSinavComponent implements OnInit {

  SinavId;
  Sorus;
  step = 0;
  constructor(public api: ApiService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.SinavId = this.route.snapshot.paramMap.get('SinavId');
    console.log(this.SinavId);
    this.api.getSorus(this.SinavId).subscribe(res => {
      console.log(res);
      this.Sorus = res;
      this.Sorus.forEach(q => {
        q.cevaps = [q.dogrucevap, q.cevap1, q.cevap2, q.cevap3];
        this.shuffle(q.cevaps);
      });
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  finish() {
    let dogru = 0;
    this.Sorus.forEach(q => {
      if (q.dogrucevap === q.selectedcevap) {
        dogru++;
      }
    });

    const dialogRef = this.dialog.open(SonucComponent, {
      width: '250px',
      data: {dogru, total: this.Sorus.length}
    });
  }

}
