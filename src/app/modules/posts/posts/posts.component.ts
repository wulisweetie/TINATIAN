import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  constructor(public http:HttpClient) { }
   
    ngOnInit(){
     var api = './../../../assets/data.json';
    // var api = 'http://devopsapac29.conygre.com:8081/api/v1/company/all';
      this.http.get(api).subscribe(response=>{
        console.log(response);
      });
      Highcharts.chart('container', this.options);
    }
    public options: any = {
       chart: {
         type: 'spline',
         height: 700
       },
       title: {
         text: 'Monthly Average Temperature'
       },
       credits: {
         enabled: false
       },
   
       xAxis: {
        type: 'category'
        //  categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   
       },
       
    //    series: [
    //         {
    //            name: 'Ahmedabad',
    //            data: [3.0, 15.9, 19.5, 16.5, 25.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
    //         },
    //         {
    //            name: 'Nadiad',
    //            data: [5.2, 2.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
    //         },
    //         {
    //            name: 'Surat',
    //            data: [4.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    //         },
    //         {
    //            name: 'Mumbai',
    //            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    //         }
    //      ]
    //  }
    series: [{
        data: [{
          y: 29.9,
          name: 'Jan'
        }, {
          y: 71.5,
          name: 'Feb'
        },{
          y: 106.4,
          name: 'Mar'
        }, {
          y: 129.2,
          name: 'Apr'
        }, {
          y: 144.0,
          name: 'May'
        },{
          y:176.0,
          name: 'Jun'
        }, {
          y: 135.6,
          name: 'Jul'
        }, {
          y: 148.5,
          name: 'Aug'
        }, {
          y: 216.4,
          name: 'Sep'
        },{
          y: 194.1,
          name: 'Oct'
        }, {
          y:95.6,
          name: 'Nov'
        }, {
          y: 54.4,
          name: 'Dec'
        }]
      },
      {
        data: [{
          y: 29.9,
          name: 'Jan'
        }, {
          y: 71.5,
          name: 'Feb'
        },{
          y: 106.4,
          name: 'Mar'
        }, {
          y: 129.2,
          name: 'Apr'
        }, {
          y: 144.0,
          name: 'May'
        },{
          y:176.0,
          name: 'Jun'
        }, {
          y: 135.6,
          name: 'Jul'
        }, {
          y: 148.5,
          name: 'Aug'
        }, {
          y: 216.4,
          name: 'Sep'
        },{
          y: 194.1,
          name: 'Oct'
        }, {
          y:95.6,
          name: 'Nov'
        }, {
          y: 54.4,
          name: 'Dec'
        }]
      }]
   
     
  }
}
