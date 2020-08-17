import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';

import {NewsService} from './news.service';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    TruncateModule
  ],
  providers: [
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
