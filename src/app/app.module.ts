import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApiCall } from '../providers/api-call';
import { CompanyPage } from '../pages/company/company';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CompanyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CompanyPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiCall
  ]
})
export class AppModule {}
