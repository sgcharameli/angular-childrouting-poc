import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
})
export class DashboardPagePage implements OnInit {

  public appPages = [
    {
      title: 'Budget',
      url: 'budget',
      icon: 'budget'
    },
    {
      title: 'Accounts',
      url: 'accounts',
      icon: 'accounts'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
