import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-test',
  template : `
    <div (click) = "onSelect(data)" *ngFor = "let data of arr">
     <h1> {{data.id}} {{data.name}}</h1>
    </div>
  `,
  styleUrls: ['./test.component.css']
})



export class TestComponent implements OnInit {

  public arr: Item[] =  [
    {
      id : 1,
      name : "pankaj"
    },
    {
      id : 2,
      name : "khiladi"
    },
    {
      id : 3,
      name : "xyz"
    },
    {
      id: 4,
      name : "abc"
    }
  ]
  onSelect = (data : Item) =>{
    this.router.navigate([`/test/${data.id}`])
   console.log('data is',data);
  }
  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

}
