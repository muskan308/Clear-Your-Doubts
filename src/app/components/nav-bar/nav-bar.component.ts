import { Component, OnInit } from '@angular/core';
import { faHome, faSignOut, faBook,faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(){}
  ngOnInit():void {}
  faHome = faHome;
  faSignOut = faSignOut;
  faTeacher = faChalkboardTeacher;
  faSubject = faBook;
  nav:any;
  over:any;
  inner:any;
  toggle:boolean = false;
  enter:boolean = false;/////////////////////////////////
  
  
  hide() {
    this.enter = !this.enter; 
  }

  handleNav(){
    this.nav = document.querySelector("nav");
    this.nav.style.left = "0";
    this.toggle = true;
    this.over = document.getElementById("overlay");
    this.over.style.display = "block";
    this.over.style.backgroundColor = "rgb(8,8,8)";
    this.inner = document.getElementById("inner");
    this.inner.style.zIndex = -1;
  }

navIn(){
  this.nav = document.querySelector("nav");
  this.nav.style.left = "-20%";
  this.over = document.getElementById("overlay");
  this.over.style.display = "none";
  this.inner = document.getElementById("inner");
  this.inner.style.display = "none";
}
  
dropdown(){
  this.inner = document.getElementById("inner");
  this.inner.style.display = "flex";
  this.over = document.getElementById("overlay");
  this.over.style.display = "block";
  this.
  over.style.backgroundColor = "transparent";
}

}
