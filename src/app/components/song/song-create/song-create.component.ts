import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css'],
})
export class SongCreateComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  songs: any = [];
  singers:any=[];
  song: any = {
    name: '',
    album: '',
    author: '',
    creator:'',
    singerValues:[],
    musicType: '',
    description:'',
    linkMp3: '',
  };

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  showButton: boolean = true;

  ngOnInit(): void {
    this.getAllSong();
    this.getAllSinger();
  }




  getAllSong() {
    this.httpClient.get('http://localhost:8080/songs').subscribe((res) => {
      this.songs = res;
    });
  }

  getAllSinger() {
    this.httpClient.get('http://localhost:8080/singers').subscribe((res) => {
      this.singers = res;
    });
  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.selectedFile.name
    );

    this.httpClient
      .post('http://localhost:8080/songs/uploadmp3', uploadImageData, {  observe: 'response',
      responseType: "json"
      })
      .subscribe((res) => {
        if (res.status === 200) {
          this.song.linkMp3 = res.body.linkMp3;
          this.showButton = false;
        }
      }),((err) =>{});
  }

  createSong() {
    debugger
    this.httpClient
      .post('http://localhost:8080/songs/create', this.song)
      .subscribe((res) => {
        debugger;
        this.getAllSong();
      });
  }
}
