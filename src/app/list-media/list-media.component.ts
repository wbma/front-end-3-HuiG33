import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {DigitransitService} from '../services/digitransit.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss'],
})
export class ListMediaComponent implements OnInit {

  printThis: string;
  mediaArray: any;

  stopArray: any;

  constructor(
    public mediaService: MediaService,
    private digitransitService: DigitransitService) {
  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.map(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn320.png';
        media.thumbnail = thumbName;
      });

      console.log(this.mediaArray);

      /*this.mediaArray.forEach((media, index) => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn320.png';
        this.mediaArray[index].thumbnail = thumbName;
      });*/

      /*const temp = this.mediaArray[0].filename.split('.');
      console.log(temp[0] + '-tn320.png');*/
    });

    // console.log(this.digitransitService.getRoutes('Gransinmäki'));
    this.digitransitService.getRoutes('Gransinmäki').subscribe(response => {
      console.log(response.data.stops);
      this.stopArray = response.data.stops;
    });
  }

}
