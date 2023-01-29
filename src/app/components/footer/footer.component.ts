import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin,faTelegram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFace = faFacebook;
  faInsta = faInstagram;
  faLink = faLinkedin;
  faTel = faTelegram;
 
  constructor() { }

  ngOnInit(): void {
  }

}
