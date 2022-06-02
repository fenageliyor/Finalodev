import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { soruComponent } from './components/soru/soru.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { sorusComponent } from './components/sorus/sorus.component';
import {MatlisteModule} from '@angular/material/liste';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { sinavComponent } from './components/sinav/sinav.component';
import { sinavlisteComponent } from './components/sinavliste/sinavliste.component';
import { kayitComponent } from './components/kayit/kayit.component';
import { AuthinterceptorService } from './services/authinterceptor.service';
import { girisComponent } from './components/giris/giris.component';
import { baslatComponent } from './components/baslat/baslat.component';
import { baslatsinavComponent } from './components/baslat-sinav/baslat-sinav.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { sonucComponent } from './components/sonuc/sonuc.component';
import {MatDialogModule} from '@angular/material/dialog';


const appRoutes: Routes = [
  {
      path: 'soru',
      component: soruComponent
  }, {
    path: 'soru/:sinavId',
    component: soruComponent
}, {
      path: 'sorus',
      component: sorusComponent
  }, {
    path: '',
    component: HomeComponent
}, {
  path: 'sinav',
  component: sinavComponent
}, {
  path: 'kayit',
  component: kayitComponent
}, {
  path: 'giris',
  component: girisComponent
}, {
  path: 'baslat',
  component: baslatComponent
}, {
  path: 'baslatsinav/:sinavId',
  component: baslatsinavComponent
}
  ];

@NgModule({
  declarations: [
    AppComponent,
    soruComponent,
    sorusComponent,
    HomeComponent,
    NavComponent,
    sinavComponent,
    sinavlisteComponent,
    kayitComponent,
    girisComponent,
    baslatComponent,
    baslatsinavComponent,
    sonucComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatlisteModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
