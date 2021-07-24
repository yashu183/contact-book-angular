import { Injectable } from '@angular/core';

import { Output } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  

  constructor() { }

  contactDetails : FormArray = new FormArray([]);
  setContacts(contactsArray: FormArray){
    this.contactDetails = contactsArray;
  }
  getContacts(){

  }
}
