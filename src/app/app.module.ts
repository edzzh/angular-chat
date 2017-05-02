import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';

//Must export config
export const firebaseConfig = {
  apiKey: "AIzaSyBuCJ5hZdSfOt8RhSvIPJtVFHdUV_6FlpI",
  authDomain: "angchat-36a91.firebaseapp.com",
  databaseURL: "https://angchat-36a91.firebaseio.com",
  storageBucket: "angchat-36a91.appspot.com",
  messagingSenderId: "1071814737715"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
