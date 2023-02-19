import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-about',
  templateUrl: './view-about.component.html',
  styleUrls: ['./view-about.component.scss']
})
export class ViewAboutComponent implements OnInit {
  @Input() pQuote!:string;
  @Input() pNone!:Boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
