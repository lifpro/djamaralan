import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP } from '@ionic-native/http/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAHH6Vn5zKjc8vsqQEG0IwTFM4Bpj6aBfw",
  authDomain: "djamaralan.firebaseapp.com",
  projectId: "djamaralan",
  storageBucket: "djamaralan.appspot.com",
  messagingSenderId: "429901095187",
  appId: "1:429901095187:web:fa4ee8bffa312d8dcc3ae6"
};
@NgModule({

  declarations: [
    AppComponent,
  ],

  entryComponents: [],


  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
