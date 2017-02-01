import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { CompanyArray } from '../../app/companyArray';

@Component({
  selector: 'page-company',
  templateUrl: 'company.html'
})
export class CompanyPage implements OnInit {
  companyGroup: CompanyArray;

  constructor (private navParams: NavParams) {}

  ngOnInit() {
    this.companyGroup = this.navParams.data;
  }

}
