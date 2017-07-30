import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {firstModule} from './modules/first.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavbarComponent,
    HomeComponent,
    ItemsListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    firstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
