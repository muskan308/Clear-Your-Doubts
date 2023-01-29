import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import teacherInfo from '../by-teacher/teacherInfo.json';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() facultyUpdate = '';
  
  teacherInfo = teacherInfo;
  facultyInfo: any;
  

  constructor() { }

  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges) {
    this.facultyInfo = this.teacherInfo.find(info => info.uid === this.facultyUpdate);
  }
  

}
