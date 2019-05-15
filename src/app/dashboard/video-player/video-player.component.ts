import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoDataService } from '../../video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  // @Input() video: Video;
  video: Observable<Video>;

  constructor(route: ActivatedRoute, videoSvc: VideoDataService ) {
    this.video = route.queryParams.pipe(
      filter(params => params['videoId']),
      map(params => params['videoId']),
      switchMap(id => videoSvc.getDetails(id))
    );
   }

  ngOnInit() {
  }

}