import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerModel: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  registerToggle() {
    this.registerModel = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerModel = registerMode;
  }
}