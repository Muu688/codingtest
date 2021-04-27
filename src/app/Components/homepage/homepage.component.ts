import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { AuthService } from "../../shared/services/auth-service.service";
import { element } from 'protractor';
import { SubjectAPIService } from 'src/app/shared/services/subjectAPI.service';
import { Subject } from '../../classes/subject'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {

  constructor(private _subjectApiService: SubjectAPIService,  public authService: AuthService,) {
  }

  listSubjects: Subject[] = null;

  displayedColumns: string[] = ['subject_code', 'subject_desc'];

  ngOnInit() {
    this._subjectApiService.getSubjects()
      .subscribe
      (
        data => {
          this.dataSource = new MatTableDataSource(data);
          this.setSort();
        }
      );

  }
  dataSource = new MatTableDataSource(this.listSubjects);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
//   @ViewChild(MatSort) set matSort(sort: MatSort) {
//     this.dataSource.sort = sort;
// }

  setSort(){
    this.dataSource.sort = this.sort;
  }

}

