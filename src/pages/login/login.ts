import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  displayName: string;
  photoURL:string;


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private authService: AuthProvider,
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private platform: Platform
  	) {
    this.afAuth.authState.subscribe(user => {
      if(!user){
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;
      this.photoURL = user.photoURL
      this.navCtrl.push('HomePage');
    });
  }

  signInWithFB(){

  	this.authService.signInWithFacebook();

  	//this.navCtrl.setRoot('HomePage');
  }
  signOut(){
  	this.authService.signOut();
  }

}
