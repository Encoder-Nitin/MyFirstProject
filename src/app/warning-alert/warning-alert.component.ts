import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  username = 'Test warning';
  alert = false;
  warningstatus = 'there is no warning';
  warners=['Test warning','Test warning 2'];
  constructor() {
  }

  ngOnInit(): void {
  }

  onWarningCreation() {
    this.alert = true;
    this.warners.push(this.username);
    this.warningstatus = 'There is a warning,the warning is' + this.username;
  }
}
