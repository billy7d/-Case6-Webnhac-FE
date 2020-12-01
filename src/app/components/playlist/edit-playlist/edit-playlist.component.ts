import { PlaylistService } from './../../../services/playlist/playlist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {


  
  songs: any ={
  };

  idPlaylist:number;
  playlist:any = {
    name: '',
    musicType: '',
    description:'',
    songQuantity:[],
    view:''

  };


  constructor(private playlistService:PlaylistService, private actRouter:ActivatedRoute, private router:Router) {
    this.idPlaylist = parseInt(this.actRouter.snapshot.params.id);
    this.getPlaylistById(this.idPlaylist)
   }

  ngOnInit(): void {
    this.getPlaylistById(this.idPlaylist);
    this.getAllSong();
  }

  getPlaylistById(id) {
    this.playlistService.getPlaylistById(id)
        .then(res => {
          this.playlist = res;

        }, error => window.alert('errorr'));

  }

  getAllSong(){
    this.playlistService.getAllSong()
    .then(res =>{
      this.songs = res;
    },err =>window.alert("has error"));
  }

  editPlaylist(id){
    this.playlistService.updatePlaylist(id,this.playlist)
    .then(res => {
      this.playlist = res;
      // this.router.navigateByUrl('/playlists');
    }, error => window.alert('errorr'));
  }



}
