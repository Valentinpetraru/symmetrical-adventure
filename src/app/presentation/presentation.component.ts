import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Input() quote!:boolean;
  @Input() pNone!:boolean;
  @Input() pDescription!:string;
  @Input() pAuth!:string;
  @Input() pQuote!:string;
  @Input() pLocation!:string;
  @Input() pAnno!:string;
  @Input() pTitle!:string;
  @Input() pSrc!:string;


}
