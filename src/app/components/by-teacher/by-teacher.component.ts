import { Component, OnInit } from '@angular/core';
import teacher from './teacherInfo.json' ;

@Component({
  selector: 'app-by-teacher',
  templateUrl: './by-teacher.component.html',
  styleUrls: ['./by-teacher.component.css']
})
export class ByTeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value:any;
  teacher = teacher; // values from teacherInfo.json
  searches:any = [];
  facultyUpdate:any;
  show:boolean = false;  //to control the display of the info of the teachers


  getName(val:any) {
    this.value = val;
    console.log(val);
  }

  doSearch() {
    this.searches = [];
    for(var val of this.teacher) {
      if(val.name.toLowerCase().includes(this.value)){   //to search for name in the json file
        this.searches.push(val);
      }
    }
  }

  selected(val:any) {
    this.show = true;
    console.log(val);
    
    // for(var value of this.teacher) {
    //   if(value.uid == val){
    //     this.searches = value;
    //   }
    // }
    this.facultyUpdate = val;
    
  }
}
