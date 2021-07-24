import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.css']
})
export class ShowContactsComponent implements OnInit {

  //@Input() addressFormArray : FormArray = new FormArray([]);
contactsArray : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    //console.log(this.addressFormArray.value,"inside ngOnInIt of showContacts");  
  }

  onNewContact(contact:any){
    console.log("inside new contact function...")
    this.contactsArray.push(contact);
    console.log(this.contactsArray);
  }

}
