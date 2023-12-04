import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { ConsoleReporter } from 'jasmine';



// we need to create an angular form component 

@Component({
  selector: 'app-root',
  template : `
    <div >
    <label>Enter the id </label>
    <input [ngModel]="inputValue" (ngModelChange)= "solve($event)" class = "input-bar" type = "number"/>
     <div class = "outer-div">
     <ng-container *ngIf = "arr.length>0 ; else notFound"> 
    <span class="heading" *ngFor="let data of arr">{{ data.id }}</span>
    </ng-container>
    <ng-template #notFound>
    <p>No data found</p>
  </ng-template>
     <div>
   </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-dream-project';
  public inputValue:number;
  
   public arr = [];
    constructor(private http : HttpClient){
    }

       solve = (index : number) =>{
      
        const new_arr =  this.arr.filter((element:any)=>{
            return element.id === index
        })
       this.arr = new_arr;
    }
    ngOnInit(){
      this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data : any [] )=>{
          console.log('data',data);
          this.arr = data
      })
    }
}
