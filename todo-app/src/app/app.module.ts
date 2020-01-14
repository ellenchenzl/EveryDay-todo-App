import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



const appRoutes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'Home',component: HomeComponent}, 
  {path:'Diary',component: DiaryComponent},
  {path:'Contact',component: ContactComponent},
  {path:'About',component: AboutComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  
    BrowserModule,
    AppRoutingModule,
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
