import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { AuthService } from "../../shared/services/auth-service.service";
import { element } from 'protractor';
import { StudentAPIService } from 'src/app/shared/services/studentAPI.service';
import { Subject } from '../../classes/subject'

@Component({
  selector: 'app-studentIDforCourse',
  templateUrl: './studentIDforCourse.component.html',
  styleUrls: ['./studentIDforCourse.component.css']
})

export class studentIDforCourseComponent {

  constructor(private _studentApiService: StudentAPIService,  public authService: AuthService,) {
  }

  listStudentIDs: Subject[] = null;

  displayedColumns: string[] = ['student_id'];

  ngOnInit() {
    this._studentApiService.getStudents()
      .subscribe
      (
        data => {
          this.dataSource = new MatTableDataSource(data);
          console.log(this.dataSource);
          this.setSort();
        }
      );

  }
  dataSource = new MatTableDataSource(this.listStudentIDs);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
//   @ViewChild(MatSort) set matSort(sort: MatSort) {
//     this.dataSource.sort = sort;
// }

  setSort(){
    this.dataSource.sort = this.sort;
  }

}

