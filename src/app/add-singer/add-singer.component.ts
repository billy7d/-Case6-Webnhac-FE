import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-add-singer',
  templateUrl: './add-singer.component.html',
  styleUrls: ['./add-singer.component.css']
})
export class AddSingerComponent implements OnInit {
  singer: any= {
    name: "",
    gender: "",
    birthday: Date,
    musicType: "",
    story: "",
    band: "",
    tuan: "",
    view: "",
    valuesSong:"",
    linkImg: ""
  }
  tuan:any;
  selectedFile: File;
  showButton: boolean = true;
  currentUser: any;
  song: any= [];
  constructor(private router: Router,private fb: FormBuilder, private http:HttpClient,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getAllSong();
    this.currentUser = this.token.getUser();
  }
  getAllSong(){
    this.http.get("http://localhost:8080/songs/newSong")
    .subscribe(res => {
        this.song= res;}, err => {  window.alert("Sai rồi bạn!")})
  }
  image: "";
  onclickAdd(){
    for (const i in this.singer.tuan) {
      this.singer.tuan[i] = parseInt(this.singer.tuan[i]);
    }
    this.singer.linkImg = this.image;
    this.http.post  ("http://localhost:8080/singers/create",this.singer)
  .subscribe(res => {
      window.alert("add thanh cong");
      this.router.navigateByUrl("/show-list-song")
    }, err => {  window.alert("Sai rồi bạn!")})
  }

  onFileChangedAva(event) {
    this.selectedFile = event.target.files[0];

    const uploadImgData = new FormData();
    uploadImgData.append('imgFile',this.selectedFile,this.selectedFile.name);

    this.http.post('http://localhost:8080/singers/uploadava', uploadImgData, {observe: 'response',responseType: "json"})
      .subscribe((res) => {
        if (res.status === 200) {
          this.image = res.body.linkImg;
          this.tuan="bấm được create rồi bạn eey!";
          this.showButton = false;
        }
      }),((err) =>{});
  }

}
