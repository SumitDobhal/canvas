import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

//pages-import start
import {CanvasDrawComponent} from '../../components/canvas-draw/canvas-draw'
//pages-import ends

// plugins starts
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
// plugins ends
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  options:any;
  imageSr:string;
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              private camera: Camera,
              private streamingMedia: StreamingMedia) {    
  }

  takePicture(){
    this.options = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(this.options)
    .then((imageData)=>{
      this.imageSr=imageData;       
      this.navCtrl.push(CanvasDrawComponent,this.imageSr); 
    });
  }

  playVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape'
    };
    
    this.streamingMedia.playVideo('https://www.youtube.com/watch?v=83L6B13ixQ0', options);
  }
}
