import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './core/models/componente';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  componentes$: Observable<Componente[]>;

  constructor(
    private dataService: DataService,
    private platform: Platform,
    ) {
      this.initializeApp();
    }
  ngOnInit(): void {
  }

  getOptions(){
    this.componentes$=this.dataService.getMenuOpts();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.getOptions();
    });
  }

}
