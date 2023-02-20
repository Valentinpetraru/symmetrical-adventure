import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pAnno ="2022"
  pAuth ="Mentalism course"
  pDescription ='"HOW DRAWING HELPED ME LEARN THE FUNDEMENTALS OF DESIGN"'
  pLocation ="Roma"
  pQuote = "I've always loved to draw. As well as helping me express my love for cars and architecture, drawing has helped learn all about light and shadow, contrast and perspective. Drawing was also the thing above all that lead me to graphic design. \n\n Being able to draw well is a huge advantage in graphic design and has formed the base of my learnig curve as a designer."
  pTitle= 'Drawing and Sketching'
  quote = false
  ppAnno ="2022"
  ppAuth ="My art instagram"
  ppDescription ='HOW BUILDING LEGO CREATIONS HAS HELPED MY ABILITY TO PROBLEM-SOLVE'
  ppLocation ="Roma"
  ppQuote ="Ever since I can remember, I was building Lego. At first sight, Lego might look like a children's toy, yet it allows me to unleash my full creativity and ingenuity. I think above all, Lego has helped me to problem-solve.Especially during the process of building models to a real counterpart, like this one, you encounter countless problems. Then you have to use the huge library of parts and your brain to solve those problems."
  ppTitle = 'Building Lego MOCs'

  ora!:string;
  constructor(){
    setInterval(()=> {
      let today = new Date();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.ora = time
      return time
    }, 1000)
  }

  ngOnInit(): void {
  }

}
