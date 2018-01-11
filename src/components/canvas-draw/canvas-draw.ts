import { Component,ViewChild,Renderer } from '@angular/core';
import {Platform ,NavParams} from 'ionic-angular'
/**
 * Generated class for the CanvasDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'canvas-draw',
  templateUrl: 'canvas-draw.html'
})
export class CanvasDrawComponent {

  
  @ViewChild('myCanvas') canvas:any;
  canvasElement:any;
  lastX:number;
  lastY:number; 

  text: string;
  ctx :any;

  drag:number;
  firstX  :number;
  firstY  :number;
  fromMove:string;

  imagenew:string;
  constructor(
              public rendrer :Renderer,
              public platform:Platform,
              public navParams: NavParams) {
    this.imagenew = this.navParams.data;            
  }
  ngAfterViewInit(){
    this.canvasElement=this.canvas.nativeElement;
    this.rendrer.setElementAttribute(this.canvasElement,'width',this.platform.width()+'')
    this.rendrer.setElementAttribute(this.canvasElement,'height',this.platform.height()*.925+'')
    console.log(this.platform.width(),this.platform.height());
  }

  handleStart(ev){
    this.lastX=ev.touches[0].pageX;
    this.lastY=ev.touches[0].pageY;
    this.drag=1;
    this.fromMove="N";    
  }
  handleMove(ev){
    this.ctx = this.canvasElement.getContext('2d');
    let CurrentX = ev.touches[0].pageX;
    let CurrentY = ev.touches[0].pageY;
    
    if (this.drag==1){
      this.firstX = CurrentX;
      this.firstY = CurrentY;
    }

    this.drag++;

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX-this.ctx.canvas.offsetLeft-2,this.firstY-this.ctx.canvas.offsetTop-2);
    this.ctx.lineTo(CurrentX-this.ctx.canvas.offsetLeft-2,  this.firstY-this.ctx.canvas.offsetTop-2);
    this.ctx.closePath();
    this.ctx.srtokeStyle='#000';
    this.ctx.lineWidth=5;
    this.ctx.stroke();

    this.lastX=CurrentX;
    this.lastY=CurrentY;
    this.fromMove="Y";
  }
  
  handleEnd(ev){
    if (this.fromMove=="Y"){
      this.ctx = this.canvasElement.getContext('2d');
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX-this.ctx.canvas.offsetLeft-2, this.firstY-this.ctx.canvas.offsetTop-2);
      this.ctx.lineTo(this.lastX+25-this.ctx.canvas.offsetLeft-2, this.firstY-25-this.ctx.canvas.offsetTop-2);
      this.ctx.lineTo(this.lastX+25-this.ctx.canvas.offsetLeft-2, this.firstY+25-this.ctx.canvas.offsetTop-2);
      this.ctx.fill();
    }
  }

  saveImage(){
    let can =this.canvas.nativeElement;
    can.toDataURL("image/jpg");
    var dataURL = can.toDataURL();
    console.log(dataURL.base64);
  }
}
