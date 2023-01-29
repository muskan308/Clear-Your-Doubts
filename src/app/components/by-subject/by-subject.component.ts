import { Component, OnInit } from '@angular/core';
import teacher from '../by-teacher/teacher.json';
import teacherInfo from '../by-teacher/teacherInfo.json';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-by-subject',
  templateUrl: './by-subject.component.html',
  styleUrls: ['./by-subject.component.css']
})
export class BySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // KEY VALUE for ngFor
  private onCompare(_left: KeyValue<string,[]>, _right: KeyValue<string, []>): number {
    return -1;
  }
  // free:any;

  values = teacher; //values from json file teacher.json
  deptid:any; //to store the id of selected department
  showCourses:any; // to store the array of courses
  showFacultyObj:any; // to store the object of teachers
  dataSelected :boolean = false; //to ensure that all the list are selected
  facultySel:any = "";
  facultyUpdate:any = "";
  show:boolean = false;  //to control the display of the info of the teachers
   teacherInfo = teacherInfo; // values from teacherInfo.json

 //to get the value of the deptid
  getDep(val:any){
    this.deptid = val;
    // console.log(this.deptid);
    for(var value of this.values) {
      if(value.courseId == val) {
        this.showCourses = value.courses;
      }
    }
  }

  //to get the value of the course and show teachers
  getCourse(val:any) {
    for(var value of this.showCourses) {
      if(val == value.id){
        this.showFacultyObj = value.teachers;
      }
    }
    
 
  }

  
//to get the value of selected teacher
  getFaculty(val:any) {
    this.facultySel = val;
    this.dataSelected = true;
  }

  //to show availability after selection
 

  showresult() {
    console.log(this.facultySel);
    if(this.dataSelected == true){
      this.show = true;
      this.facultyUpdate = this.facultySel;


    }

    
  }

}
