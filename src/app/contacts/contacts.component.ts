import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { Contact } from '../modele/modele.contacts';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {




   contact! :Contact[]
   co:any;
   motCle:string=""
   currentPage:number=0
   size:number=2
   pages!:Array<number>
   
  constructor(private router:Router,private serviceContact:ContactService,
    private httClient:HttpClient) {
    
   }

  ngOnInit(): void {
  
    //this.listerContact();
    /*
    this.httClient.get("http://localhost:8080/chercherContacts?mc=A&size=4&page=0").subscribe(
      data=>{
        this.co=data
      }
    )
*/
this.doSearch()

    }
   
   listerContact() {
      this.serviceContact.lister().subscribe(
        data => {
          this.contact = data;
          console.log(this.contact)
        }
      );
    }

  modifier(c:Contact) {
    this.router.navigateByUrl("/editContacts/"+c.id)
}

deleteContact(c: Contact) {
  {
    let conf=confirm("etes vous sur de vouloir supprimer");
     if (conf==false) return;  
   this.serviceContact.supprimer(c.id).subscribe({
     next:(data)=>{
      // this.handleGetAllProduct()
      let index=this.contact.indexOf(c)
      this.contact.splice(index,1)
      alert("contact supprime avec success")
     }
   })
   }
    
  
  }
  doSearch(){
    this.serviceContact.lister1(this.motCle,this.currentPage,this.size).subscribe(
      {
        next:(data)=>{
        this.co=data
        this.pages=new Array(this.co.totalPages)
         console.log(this.co)
         if(this.co.totalElements==0
          ){
          alert(" Contact not found")
         }
        },error:err=>{
          console.log(err)
        }
      }
    )
  }
  onSearch() {
    this.doSearch()
    }


    goToPage(i: number) {
      this.currentPage=i
      this.doSearch()
      }
      

}
