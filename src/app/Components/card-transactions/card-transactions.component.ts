import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/material/http.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
@Component({
  selector: 'app-card-transactions',
  templateUrl: './card-transactions.component.html',
  styleUrls: ['./card-transactions.component.scss']
})
export class CardTransactionsComponent implements OnInit {

  constructor(private httpService: HttpService) {
    this.getFields();
  }
  fields = [];
  transaction = []
  getFields = () => {
    this.httpService.getData(environment.tableInfo).subscribe((res: any) => {
      this.fields = res.data;
    })
  }

  getTransaction = () => {
    this.httpService.getData(environment.transactions).subscribe((res: any) => {
      this.transaction = res.data[0];
    })
  }

  getValue = (field) => {
    if (this.transaction.hasOwnProperty(field)) {
      if (field.includes('amount')) {
        return this.transaction['transaction_currency'] + this.transaction[field];
      }
      else if (field.includes('date')) {
        return moment(this.transaction[field]).format('MM/DD/YYYY');
      }
      else {
        return this.transaction[field];
      }
    }
    return '-'
  }
  ngOnInit() {
    this.getTransaction();
  }

}
