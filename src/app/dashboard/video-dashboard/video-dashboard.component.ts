import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoDataService } from '../../video-data.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  selectedVideo: Video;

  videoList: Observable<Video[]>;

  constructor(videoSvc: VideoDataService) {
    // this.videoList = videoSvc.loadVideos();

    // Sets the first video in the list selected by default.
    this.videoList = videoSvc.loadVideos().pipe(
      tap(videos => this.selectVideo(videos[0]))
    );
  }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }
}