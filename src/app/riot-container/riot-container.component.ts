import {Component, ElementRef, OnInit} from '@angular/core';
import * as riot from "riot";
import  '../rt-grid.js';

@Component({
  selector: 'app-riot-container',
  templateUrl: './riot-container.component.html',
  styleUrls: ['./riot-container.component.scss']
})
export class RiotContainerComponent implements OnInit{
  private type: string;

  constructor(private elementRef: ElementRef) {
    this.type = this.elementRef.nativeElement.getAttribute('type');
  }

  ngOnInit() {

    const givenAttributes = this.elementRef.nativeElement.getAttributes() // ??
    riot.mount( this.type , { ...givenAttributes})

  }


}
