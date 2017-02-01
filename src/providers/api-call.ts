import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Company } from '../app/company';


/*
  Generated class for the ApiCall provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiCall {

  companies: Company;

  constructor(public http: Http) {
    console.log('Hello ApiCall Provider');
  }

  getCompanies() {
    let headers = new Headers();
    headers.append("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY");

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`https://api.demo.muulla.com/cms/merchant/all/active/10/1`, options)
    .toPromise()
    .then(res => res.json().data as Company)
    // .then(data => { this.companies = data.data})
  }

}
