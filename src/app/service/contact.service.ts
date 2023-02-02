import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Contact } from '../modele/modele.contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactUrl:string;
  
   constructor(private httpRequest: HttpClient) { 
   //this.contactUrl="http://localhost:8080/chercherContacts?mc=A&size=4&page=0"
   this.contactUrl="http://localhost:8080/contacts"

   }
// methode affficher()
   public lister() : Observable<Contact[]> {
     return this.httpRequest.get<Contact[]>(this.contactUrl);
     
   }
   public lister1(mc:string,page:number,size:number) {
   //"http://localhost:8080/chercherContacts?mc=A&size=4&page=0"
   return this.httpRequest.get("http://localhost:8080/chercherContacts?mc="
   +mc+"&size="+size+"&page="+page).pipe(
    map(resp=>resp)
   )
    
 }
   //rechercher contact
   public recherher(id:number) : Observable<Contact> {
    return this.httpRequest.get<Contact>("http://localhost:8080/contacts/"+id);
    
  }

//methode supprimer
   public supprimer(id :number):Observable<any>{

  return this.httpRequest.delete("http://localhost:8080/contacts/"+id);
  
   }

   // methode add
   public ajouterContact(c:Contact):Observable<Object>{
    return this.httpRequest.post("http://localhost:8080/contacts",c);
   }
   // methode add
   public modifierContact(id:number,c:Contact):Observable<Object>{
    return this.httpRequest.put("http://localhost:8080/contacts/"+id,c);
   }
}
