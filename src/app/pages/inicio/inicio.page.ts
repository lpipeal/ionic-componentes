import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/core/models/componente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'fab',
      redirectTo: '/fab',
    },


  ];

  constructor() { }

  ngOnInit() {
  }

}
