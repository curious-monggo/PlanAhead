import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CourseProvider } from '../providers/course/course';

export const firebaseConfig = {
    apiKey: "AIzaSyCsxn-a3qGN1yBmjfIgWnmbtPHuC4-v3B4",
    authDomain: "planaheadwithsti-6fce5.firebaseapp.com",
    databaseURL: "https://planaheadwithsti-6fce5.firebaseio.com",
    projectId: "planaheadwithsti-6fce5",
    storageBucket: "planaheadwithsti-6fce5.appspot.com",
    messagingSenderId: "356978647772"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    CourseProvider
  ]
})
export class AppModule {}
