import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ApiCall } from '../../providers/api-call';
import { CompanyArray } from '../../app/companyArray';
import { CompanyPage } from '../company/company';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  companies: CompanyArray;
  selectedCompany: CompanyArray;
  companyPage = CompanyPage;

  constructor(
    public navCtrl: NavController,
    private apiCall: ApiCall
  ) {}

  getCompanies() {
  this.apiCall.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

}
