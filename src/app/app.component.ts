import { Component } from '@angular/core';


// we need to create an angular form component 

@Component({
  selector: 'app-root',
  template : `
   <div>

   <div>
   <label> Enter user-name  </label>
   <input [(ngModel)] = "username" type = "text"/>
   </div>
   <div>
   <label> Password  </label>
   <input [(ngModel)] = "password" type = "password"/>
   </div>
   <div>
   <button (click) = "onSubmit()">submit </button>
   </div>
   <!-- We need to print everything -->
   <h1 *ngFor = "let data of arr">
   <span> {{data.username}} </span>
   <span> {{data.password}} </span>
   </h1>
   </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-dream-project';
  public username : String;
  public password : String;

  public arr: {username : String, password : String}[] = [];
  // now we have to create an method for on submit
    onSubmit = () => {
      this.arr.push({username : this.username , password : this.password});
      console.log("username", this.username);
      console.log("password",this.password);
    }
    ngDoCheck () {
      console.log('finall component is re rendered');
    }
}
