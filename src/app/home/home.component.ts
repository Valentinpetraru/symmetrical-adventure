import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pAnno ="2022"
  pAuth ="Gandalf the grey"
  pDescription ='"ALL WE HAVE TO DECIDE IS WHAT TO DO WITH THE TIME THAT IS GIVEN US."'
  pLocation ="Roma"
  pQuote ="You might think that is a bit young to be doing all of this, but I am not your average teen. You see, instead of wasting my time playing video games, I try to spend as much time as possible on making my ambitions become reality."
  pTitle= 'I am 15 years old'

  constructor() { }

  ngOnInit(): void {
  }

}
