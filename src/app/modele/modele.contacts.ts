import { DatePipe } from "@angular/common";

export class Contact{
 
 constructor(public id:any, public nom: string, public prenom: string,
    public DateNaisssance:Date, public email: string, public  tel: string,
    public photo: string) {
}
 

}