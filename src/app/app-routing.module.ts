import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestDetailsComponent } from './test-details/test-details.component';


const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test/:id', component: TestDetailsComponent },
  // { path: 'test', component: TestComponent },
 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
