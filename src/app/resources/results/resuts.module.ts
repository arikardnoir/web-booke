import { ROUTES } from '../../app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// modulo de load
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { ResultsHttp } from '@resources/results/results.http';
import { ResultsService } from '@resources/results/results.service'


@NgModule({
  declarations: [
    
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
  }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ 
      ResultsHttp,
      ResultsService
 ],
  bootstrap: []
})
export class AppModule { }
