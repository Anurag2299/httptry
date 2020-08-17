import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {NewsService} from './news.service';
import {  MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httptry';
  qwerty=[];
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  dataSource1;
  p:number=1;
  displayedColumns = ['num_comments', 'points', 'author', 'title'];
  constructor(private newsService: NewsService) {
    this.qwerty=['annn','bnn','cnn']
    console.log(this.qwerty);
    console.log("######################")
  }

  ngOnInit(){
    this.qwerty=['anurag']
    console.log(this.qwerty);
    console.log("***************************")
    this.newsService.getNews().subscribe((results) => {
      if (!results) {
        return;
      }
      this.dataSource1 = results;
      this.dataSource=this.dataSource1.hits;
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource1)
      console.log(this.dataSource)
    });
  }
}
