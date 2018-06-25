import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
/*import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';*/
import { CourseProvider } from '../providers/course/course';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig = {
    apiKey: "AIzaSyATPIxkfOU5YK83yeND4tTAkt1gZNuPqew",
    authDomain: "learnfirebase-c6088.firebaseapp.com",
    databaseURL: "https://learnfirebase-c6088.firebaseio.com",
    projectId: "learnfirebase-c6088",
    storageBucket: "learnfirebase-c6088.appspot.com",
    messagingSenderId: "134131666319"
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
    CourseProvider,
    AngularFireDatabase,
    AuthProvider,
    AngularFireAuth,
    Facebook
  ]
})
export class AppModule {}
