import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor() { }
  @Input() quote!:boolean;
  @Input() pDescription!:string;
  @Input() pAuth!:string;
  ngOnInit(): void {
  }

}
