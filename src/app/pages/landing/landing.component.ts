import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import { register } from 'swiper/element/bundle';
import { NgFor } from '@angular/common';
register();

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:[NgFor]
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  isPlaying = false;
  @ViewChild('target', { static: false }) target!: ElementRef;
  @ViewChild('abtVideo', { static: false }) abtVideoPlaer!: ElementRef;
  player!: Player | any;
  aboutVideoPlayer!: Player | any;
  public abtVideoPlaying: boolean = false;

  slides = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];

  newsItems = [
    {
      title: "Why the Maldives row could boost India's domestic tourism sector",
      source: "The National News",
      date: "January 15, 2024"
    },
    {
      title: "High-end villas beat pandemic blues",
      source: "Fortune India",
      date: "September 14, 2021"
    },
    {
      title: "The Great Escape: Vianaar Escapes",
      source: "Outlook Traveller",
      date: "January 30, 2020"
    }
  ];

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

    this.aboutVideoPlayer = videojs(this.abtVideoPlaer.nativeElement, {
      muted: true,
      playsinline: true,
      controls: true
    });
 
    this.player.ready(() => {
      if(this.player != undefined){
        this.player.play().catch((err: any) => {
          console.warn('Autoplay blocked, waiting for user interaction', err);
        });
      }
    });
  }

  playAboutVideo(){
    this.aboutVideoPlayer.ready(() => {
      if(this.aboutVideoPlayer != undefined){
        this.aboutVideoPlayer.play().then(() => {
          this.abtVideoPlaying = true;
        })
        .catch((err: any) => {
          this.abtVideoPlaying = false;
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
