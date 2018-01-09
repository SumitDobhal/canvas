import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

//pages-import start
import {CanvasDrawComponent} from '../../components/canvas-draw/canvas-draw'
//pages-import ends

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  options:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {

    
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

      this.navCtrl.push(CanvasDrawComponent,imageData);
        
    });
  }

 

}
