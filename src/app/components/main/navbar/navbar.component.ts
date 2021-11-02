import { Component, OnInit } from '@angular/core';
import { faHome, faPlusSquare, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  faHome = faHome;
  faPlusSquare = faPlusSquare;
  faUser = faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
