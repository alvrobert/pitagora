import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service';
import {MatSnackBar} from '@angular/material';

export interface Person {
  idPersona: string;
  claveBUP: string;
  restricciones: string;
  motivoDesvinculacion: string;
  tipoCaptura: string;
  tipoDoc: string;
  nroDoc: string;
  emisor: string;
  tipoDoc2: string;
  nroDoc2: string;
  emisor2: string;
  tipoCUI: string;
  nroCUI: string;
  nroCUIAnt: string;
  nroInterno: string;
  nroDeInscEnte: string;
  apellidoRazonSocial: string;
  apellidoCasadaNombFantasia: string;
  nombre: string;
  tipoPersona: string;
  provinciaDomic: string;
  localidadDomic: string;
  idVigEnUnificacion: string;
}

// This is a data mock to test app without the vpn connection
const persons: Person[] = [
  {
    idPersona: '1000462228',
    claveBUP: '010001289134500',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'A',
    tipoDoc: '01',
    nroDoc: '12891345',
    emisor: '00',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'L',
    nroCUI: '23128913459',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Manuel Gonzalez',
    tipoPersona: 'F',
    provinciaDomic: '02',
    localidadDomic: 'Localidad 1000462228',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1000810545',
    claveBUP: '010001810855600',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'A',
    tipoDoc: '01',
    nroDoc: '18108556',
    emisor: '00',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'T',
    nroCUI: '20181085569',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Robert Alvarado',
    tipoPersona: 'F',
    provinciaDomic: '01',
    localidadDomic: 'Localidad 1000810545',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1000965095',
    claveBUP: '010002158101700',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'A',
    tipoDoc: '01',
    nroDoc: '21581017',
    emisor: '00',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'T',
    nroCUI: '27215810173',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Juan Perez',
    tipoPersona: 'F',
    provinciaDomic: '02',
    localidadDomic: 'Localidad 1000965095',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1001125614',
    claveBUP: '010002347119700',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'A',
    tipoDoc: '01',
    nroDoc: '23471197',
    emisor: '00',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'L',
    nroCUI: '27234711976',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Luis Rodriguez',
    tipoPersona: 'F',
    provinciaDomic: '01',
    localidadDomic: 'Localidad 1001125614',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1001657801',
    claveBUP: '010003070132000',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'V',
    tipoDoc: '01',
    nroDoc: '30701320',
    emisor: '00',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'L',
    nroCUI: '20307013208',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Alvaro Castellano',
    tipoPersona: 'F',
    provinciaDomic: '17',
    localidadDomic: 'Localidad 1001657801',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1001763069',
    claveBUP: '010009999999900',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'A',
    tipoDoc: '01',
    nroDoc: '99999999',
    emisor: '00',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'T',
    nroCUI: '30571421352',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Maria Alcazar',
    tipoPersona: 'F',
    provinciaDomic: '01',
    localidadDomic: 'Localidad 1001763069',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1002158658',
    claveBUP: '310000000012500',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'V',
    tipoDoc: '',
    nroDoc: '',
    emisor: '',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'T',
    nroCUI: '30685637038',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '            125',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Pedro Oropeza',
    tipoPersona: 'J',
    provinciaDomic: '22',
    localidadDomic: 'Localidad 1002158658',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1002193774',
    claveBUP: '700000000004721',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'A',
    tipoDoc: '',
    nroDoc: '',
    emisor: '',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'T',
    nroCUI: '30685637037',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '             47',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: 'APECASADA',
    nombre: 'Luisa Gonzalez',
    tipoPersona: 'J',
    provinciaDomic: '21',
    localidadDomic: 'Localidad 1002193774',
    idVigEnUnificacion: ''
  },
  {
    idPersona: '1002194114',
    claveBUP: '730000002959501',
    restricciones: '00',
    motivoDesvinculacion: '00',
    tipoCaptura: 'V',
    tipoDoc: '',
    nroDoc: '',
    emisor: '',
    tipoDoc2: '',
    nroDoc2: '',
    emisor2: '',
    tipoCUI: 'T',
    nroCUI: '30527642465',
    nroCUIAnt: '',
    nroInterno: '',
    nroDeInscEnte: '          29595',
    apellidoRazonSocial: 'APELLIDO',
    apellidoCasadaNombFantasia: '',
    nombre: 'Ana Andrade',
    tipoPersona: 'J',
    provinciaDomic: '01',
    localidadDomic: 'Localidad 1002194114',
    idVigEnUnificacion: ''
  }
];


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person = null;
  filteredPersons: Person[] = [];
  loading = false;
  displayedColumns: string[] = ['idPersona', 'nroDoc', 'nombre', 'nroCUI', 'actions'];
  personsData = persons;
  id = '';
  personType = 'nrodoc';

  constructor(
    private personService: PersonService,
    private snackbar: MatSnackBar,
  ) {

  }

  ngOnInit(): void {
  }

  clearId() {
    this.id = '';
  }

  getPersonsById(path) {
    this.snackbar.dismiss();
    this.filteredPersons = [];
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      if (path === 'id') {
        this.filteredPersons = persons.filter(person => person.idPersona === this.id.toString());
      } else {
        if (this.personType === 'nrodoc') {
          this.filteredPersons = this.id.toString() !== '' ?
            persons.filter(person => person.nroDoc === this.id.toString()) :
            persons.filter(person => person.tipoPersona === 'F');
        } else {
          this.filteredPersons = this.id.toString() !== '' ?
            persons.filter(person => person.nroCUI === this.id.toString()) :
            persons.filter(person => person.tipoPersona === 'J');
        }
      }
      this.id = '';
      if (this.filteredPersons.length === 0) {
        this.snackbar.open('No se encontraron registros relacionados con su búsqueda', 'Aceptar');
      }
    }, 2000);
    /*
    uncomment to use back functionality with vpn connection
    this.personService.getPersonsById(this.id, path).subscribe(resp => {
      // @ts-ignore
      this.filteredPersons = resp;
      this.loading = false;
      if (this.filteredPersons.length === 0) {
        this.snackbar.open('No se encontraron registros relacionados con su búsqueda', 'Aceptar');
      }
    });
    */
  }

  setPerson(person) {
    this.person = person;
  }

}
