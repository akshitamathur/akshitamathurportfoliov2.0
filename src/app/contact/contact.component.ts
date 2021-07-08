import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
    message = "Thanks for visiting my portfolio! Don't forget to follow me on my socials - and if you have any questions, or would just like to chat, do send me an email or message me on LinkedIn!";
    email = "akshita.mathur@gmail.com";


  }

}
