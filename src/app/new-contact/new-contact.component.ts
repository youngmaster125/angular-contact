import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../modele/modele.contacts';
import { ContactService } from '../service/contact.service';
import * as moment from 'moment';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact :Contact
  form!:FormGroup
  d:any
  constructor(private router:Router,private contactService: ContactService ) { 
    this.contact=new Contact(null,"","",new Date,"","","")
    
  }

  ngOnInit(): void {
    let formattedDate = (moment(this.d)).format('DD-MM-YYYY')
    this.d=formattedDate
    console.log("Date",formattedDate)
  }
  onSubmit() {
    
    let fullpath=this.contact.photo
    let filename=this.contact.photo.split("\\")
   // C:\fakepath\images4.jpg
   this.contact.photo=filename[2]
    console.log(this.contact.photo)
   
   this.contactService.ajouterContact(this.contact).subscribe({
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
