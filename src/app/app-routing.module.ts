import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  { path:"contacts"  ,component:ContactsComponent },
  {path:'', redirectTo:'/about' , pathMatch:'full'},
  { path:"newContacts"  ,component:NewContactComponent },
  { path:"editContacts/:id"  ,component:EditContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
