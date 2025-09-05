import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  isPlaying = false;
  @ViewChild('target', { static: false }) target!: ElementRef;
  player!: Player | any;

  constructor() { }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.player = videojs(this.target.nativeElement, {
      autoplay: 'muted',
      muted: true,
      loop: true,
      playsinline: true,
      controls: false
    });
 
    this.player.ready(() => {
      if(this.player != undefined){
        this.player.play().catch((err: any) => {
          console.warn('Autoplay blocked, waiting for user interaction', err);
        });
      }
    });
  }
 
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
