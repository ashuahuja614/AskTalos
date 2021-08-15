import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public videoConfig: any;

  constructor() {
    this.videoConfig = {
      autoplay: false,
      controls: true,
      fluid: true,
      sources: [{ src: '../../../assets/images/video.mp4', type: 'video/mp4' }],
      poster: "../../../assets/images/lead-generation-image.png",
      playToggle: false
    };
  }

  ngOnInit(): void {
  }

}
