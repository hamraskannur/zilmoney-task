import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { User } from 'src/app/core/interface';
import { ApiService } from 'src/app/shared/Service/api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  userData!:Observable<User[]> 
  name=""
  companyName=""
  designation=""
  constructor(private _ApiService: ApiService) {}
  ngOnInit(): void {
   this.userData= this._ApiService.getUserData();
  }
}
