import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  year: string;
  hash: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.route.queryParams.subscribe( (params: Params) => {
      this.color = params.color;
      this.year = params.year;
    } );
  }
  openMazdaPage() {
    this.router.navigate(['./cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 2000
      },
      fragment: 'pic'
    });
  }
}
