import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service';
import {error} from 'protractor';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: any = {};
  persons: any[] = [];
  id = '';
  personType = '';

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  getPersonsById(path) {
    this.personService.getPersonsById(this.id, path).subscribe(resp => {
      this.persons = resp;
      console.log(this.persons);
    });
  }

}
