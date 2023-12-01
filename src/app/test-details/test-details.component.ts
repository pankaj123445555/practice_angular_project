import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-details',
  template : `
  
  <div> finally it shows the test details component of id {{id}}</div>
  
  `,
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  public id:number;
  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.id = id
    });
  }

}
