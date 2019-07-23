import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  greeting = "Hello & Welcome";
  education = "B.Sc. Computer Science || Lassonde School of Engineering || York University.";
  description = "I'm a developer based in Toronto, with a love for designing and coding using front-end technologies. When I'm not coding, I like to record covers, go to concerts, indulge in food and boba, and play video games!";
}
