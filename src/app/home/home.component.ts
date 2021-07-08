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
  greeting = "Hi There - Welcome!";
  education = "Bachelor of Science - Computer Science";
  description = "I'm a developer based in Toronto, with a love for designing and coding using front-end technologies. More recently, I've started to explore User Interface design, as well as cloud technologies. I'm currently pursuing a certification in User Experience fundimentals, as well as Microsoft Azure. When I'm not coding, I like to record covers, go to concerts, indulge in food and boba, and play video games!";
}
