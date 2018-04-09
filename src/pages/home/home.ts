import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ChatmainPage } from '../chatmain/chatmain';
import { ChatindPage } from '../chatind/chatind';
import { PhotoPage } from '../photo/photo';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  prof(){
    {
      this.navCtrl.push(ProfilePage);
      }
  }
  chatm(){
    this.navCtrl.push(ChatmainPage)
  }
  chatid(){
    this.navCtrl.push(ChatindPage)
  }
  pho(){
    this.navCtrl.push(PhotoPage)
  }
  lgn(){
    this.navCtrl.push(LoginPage)
  }
}
