import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//pages start
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// pages ends
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// components starts
import { CanvasDrawComponent} from '../components/canvas-draw/canvas-draw';
// component ends

//plugins start 
import { Camera } from '@ionic-native/camera';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
//plugins ends

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CanvasDrawComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    StreamingMedia
  ]
})
export class AppModule {}
