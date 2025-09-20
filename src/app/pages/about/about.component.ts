import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import { register } from 'swiper/element/bundle';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../landing/landing.component.scss'],
  standalone: true
})
export class AboutComponent implements OnInit {
  isPlaying = false;
  @ViewChild('target', { static: false }) target!: ElementRef;
  @ViewChild('abtVideo', { static: false }) abtVideoPlaer!: ElementRef;
  player!: Player | any;
  aboutVideoPlayer!: Player | any;
  public abtVideoPlaying: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  gotoHomes() {
    this.router.navigate(['/homes'], { relativeTo: this.route })
  }

  gotoAbout(){
    this.router.navigate(['/about'], { relativeTo: this.route })
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
      if (this.player != undefined) {
        this.player.play().catch((err: any) => {
          console.warn('Autoplay blocked, waiting for user interaction', err);
        });
      }
    });
  }

  playAboutVideo() {
    this.aboutVideoPlayer.ready(() => {
      if (this.aboutVideoPlayer != undefined) {
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
