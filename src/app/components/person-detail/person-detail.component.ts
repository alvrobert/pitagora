import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Person} from '../person/person.component';
import { MatTableDataSource } from '@angular/material';

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

const accounts: any[] = [
  {
    titular: 'Xander Clements',
    saldo: '$71.96',
    CBU: 'SE8488135138153198535129',
    cuenta: '362481-1'
  },
  {
    titular: 'Chava Cunningham',
    saldo: '$70.44',
    CBU: 'EE679141189387587117',
    cuenta: '50716656-3'
  },
  {
    titular: 'Rina Cohen',
    saldo: '$60.15',
    CBU: 'FI0770309480415142',
    cuenta: '50508352-0'
  },
  {
    titular: 'Oprah Barrera',
    saldo: '$61.19',
    CBU: 'DO54234288005568565644765758',
    cuenta: '43668907-1'
  },
  {
    titular: 'Lane Morales',
    saldo: '$82.63',
    CBU: 'MD6702877345881851653641',
    cuenta: '37527266-0'
  }
];

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  id: any = null;
  person: any;
  account: any = null;

  displayedColumns: string[] = ['titular', 'saldo', 'CBU', 'cuenta', 'actions'];
  dataSource = new MatTableDataSource(accounts);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {

        this.id = this.route.snapshot.params.id;

        this.person = persons.find(person => person.idPersona === this.id);

      }
    });

  }

  setAccount(value) {
    this.account = value;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
  }

}
