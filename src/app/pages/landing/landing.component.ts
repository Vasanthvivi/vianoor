import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying = false;

  // Arrow functions to preserve `this` context for event listeners
  private onPlay = () => this.isPlaying = true;
  private onPause = () => this.isPlaying = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;

    // Muted autoplay is generally allowed, but to be certain, we can try to play it programmatically.
    // This is more robust against different browser policies.
    try {
      setTimeout(() => {
        video.play().then(() => {
          // Autoplay started successfully. `isPlaying` will be set by the 'play' event listener.
        }).catch(error => {
          console.error('Video autoplay was prevented:', error);
          // Autoplay was prevented. The user needs to interact with the page first.
          this.isPlaying = false;
          video.play();
        });

        // Sync the isPlaying state with the video's events
        video.addEventListener('play', this.onPlay);
        video.addEventListener('pause', this.onPause);
      }, 2000);
    } catch (error) {
    }
  }

  ngOnDestroy(): void {
    // It's a good practice to clean up event listeners to prevent memory leaks
    const video = this.videoPlayer.nativeElement;
    video.removeEventListener('play', this.onPlay);
    video.removeEventListener('pause', this.onPause);
  }

  toggleVideoPlayback(): void {
    const video = this.videoPlayer.nativeElement;
    video.paused ? video.play() : video.pause();
  }
}
