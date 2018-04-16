import { Component, Input, ViewChild, ElementRef, ContentChild, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // carName = 'Ford';
  // carYear = 2015;
  @Input() carItem: {name: string, year: number};
  @Input() name: { string };

  @ContentChild('carHeading') carHeading: ElementRef;

  constructor() {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }
  ngDoCheck() {
    console.log('DoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
