import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { CourseProvider } from '../providers/course/course';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

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
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
