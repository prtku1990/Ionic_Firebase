import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './../../models/user/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

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

	user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
  	try{
  		const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  		console.log(result)
  		if(result){
  			this.navCtrl.setRoot('HomePage');
  		}
  	}
  	catch(err){
  		console.log(err);
  	}
  	
  }

  // register() {
  	
  // }

}
