import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() newContact = new EventEmitter();

  addressFormArray : FormArray = new FormArray([]);

  contactForm : FormGroup = new FormGroup({}) ;

  contactFormUsingBuilder : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder, private dataService : DataServiceService) { }

  ngOnInit(): void {
  
    // const address = this.formBuilder.group({
    //   doorNum : '',
    //   streetName : '',
    //   dist : '',
    //   state : '',
    //   country : ''
    // })

    // this.contactForm = new FormGroup({
    //   name : new FormControl(),
    //   number : new FormControl()
    // })

    this.contactFormUsingBuilder = this.formBuilder.group({
      nameUsingBuilder : '',
      numberUsingBuilder : '',
      // permanentAdress : address,
      // residentialAddress : address
      addresses : this.formBuilder.array([])
    })

    //this.contactFormUsingBuilder.valueChanges.subscribe(console.log);

  }

  onSubmit(){
    // console.log(this.contactForm.value);
    console.log(this.contactFormUsingBuilder.value);
    this.addressFormArray = this.contactFormUsingBuilder.value;
    console.log(this.addressFormArray);
    this.newContact.emit(this.contactFormUsingBuilder.value);
    this.contactFormUsingBuilder = this.formBuilder.group({
      nameUsingBuilder : '',
      numberUsingBuilder : '',
      // permanentAdress : address,
      // residentialAddress : address
      addresses : this.formBuilder.array([])
    })
  }

  get addressForm(){
    return this.contactFormUsingBuilder.get('addresses') as FormArray;
  }

  addAddress(e:any){
    e.preventDefault();
    console.log("inisde add address method....");
    const address:FormGroup = this.formBuilder.group({
      doorNum : '',
      streetName : '',
      dist : '',
      state : '',
      country : ''
    })
    this.addressForm.push(address);

   // this.contactsArray.emit(this.addressForm);
  }
  
  deleteAddress(idx:number){
    this.addressForm.removeAt(idx);
    //this.contactsArray.emit(this.addressForm);
  }
}
