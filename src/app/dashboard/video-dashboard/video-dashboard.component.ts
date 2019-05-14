import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../app-types';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  selectedVideo: Video;

  videoList: Video[] = [];

  constructor(http: HttpClient) {
    http
      .get<Video[]>(apiUrl + '/videos')
      .subscribe(videos => this.videoList = videos);
  }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }
}