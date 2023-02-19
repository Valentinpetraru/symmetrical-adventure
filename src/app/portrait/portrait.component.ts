import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {

  constructor() { }
  @Input() pLocation!:string;
  @Input() pAnno!:string;
  @Input() pSrc!:string;
  ngOnInit(): void {
  }

}
