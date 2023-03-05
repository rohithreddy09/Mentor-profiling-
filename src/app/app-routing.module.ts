import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';

const routes: Routes = [
{path: 'contact',component:ContactComponent},
{path: 'home',component:HomeComponent},
{path: 'joinus',component:JoinusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
