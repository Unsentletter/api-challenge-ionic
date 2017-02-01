import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ApiCall } from '../../providers/api-call';
import { Company } from '../../app/company';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  companies: Company;
  selectedCompany: Company;

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
