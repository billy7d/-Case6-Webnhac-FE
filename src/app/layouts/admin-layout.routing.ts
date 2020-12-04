import { SongCreateComponent } from './../components/song/song-create/song-create.component';
import { Routes } from '@angular/router';
import { AddPlaylistComponent } from 'app/add-playlist/add-playlist.component';
import { AddSingerComponent } from 'app/add-singer/add-singer.component';
import { LoginComponent } from 'app/login/login.component';
 
 
import { QuestionComponent } from 'app/question/question.component';
import { ShowCreatorPlaylistComponent } from 'app/show-creator-playlist/show-creator-playlist.component';
import { ShowListSongComponent } from 'app/show-list-song/show-list-song.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [ 
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
   
    { path: 'createSong',     component: SongCreateComponent},
    { path: 'question',       component: QuestionComponent },
    { path: 'show-list-song', component:ShowListSongComponent},
    { path:'createSinger',      component:AddSingerComponent},
    { path:'login',           component:LoginComponent},
    {path:"add-playlist",     component:AddPlaylistComponent},
    {path:'show-playlist',    component:ShowCreatorPlaylistComponent},
];
