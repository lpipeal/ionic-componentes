import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users$: Observable<any>;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('ionList3') ionList: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
   this.users$= this.dataService.getUsers();
  }

  favorite(user: any){
    console.log('favorite',user);
    this.ionList.closeSlidingItems();
  }

  share(user: any){
    this.ionList.closeSlidingItems();
    console.log('share',user);
  }

  delete(user: any){
    this.ionList.closeSlidingItems();
    console.log('delete',user.name);
  }
}
