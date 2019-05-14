import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from './app-types';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
    providedIn: 'root'
})
export class VideoDataService {

  // Marking as private to that only this service can use
  // this instance of the HttpClient
  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(apiUrl + '/videos')
      // .pipe(map(videos => videos.slice(0, 3)));

      // ... = the spread operator; gets all of the videos from the previous array
      .pipe(
        map(videos => [
          ...videos,
          {
            title: 'Added from map!',
            author: 'map',
            id: 'aa',
            viewDetails: []
          }
        ]),
        // videos.map is a JavaScript map function, not Angular
        map(videos => videos.map(video => {
          return {
            ...video, 
            title: video.title.toUpperCase()};
        })
      ));
  }

}