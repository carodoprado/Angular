import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() imagen:string | undefined;
@Input() titulo:string | undefined;
@Input() texto:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
