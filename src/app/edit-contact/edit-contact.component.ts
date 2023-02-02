import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../modele/modele.contacts';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

   contact!:Contact
   idContact!:number


  constructor(private contactService:ContactService,private activatedRoute:ActivatedRoute
    ,private router:Router) {
    this.contact=new Contact(null,"","",new Date(),"","","")
    this.idContact=this.activatedRoute.snapshot.params['id']
    this.contactService.recherher(this.idContact).subscribe({
      next:(data)=>{
        this.contact=data
        this.contact.photo="..\\assets/image\\"+this.contact.photo
        console.log(this.contact.photo)
      },error :err=>{
        console.log(err)
      }
    })
   }

  ngOnInit(): void {
   console.log(this.contact) 
  }
  onSubmit() {
   let fullpath=this.contact.photo
    let filename=this.contact.photo.split("\\")
   // C:\fakepath\images4.jpg
   this.contact.photo=filename[2]
    console.log(this.contact.photo)
    
    this.contactService.modifierContact(this.idContact,this.contact).subscribe({
      next:(date)=>{
        console.log(this.contact.DateNaisssance)
        this.router.navigateByUrl("/contacts")   
       },error:err=>{
        console.log(err)
       }
    }
     
    )
   
    
    }
}
