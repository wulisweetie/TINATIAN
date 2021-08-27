import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';


export interface PeriodicElement {
  id:number;
  symbol: string;
  name: string;
  isin: string;
  industry: string;
  series: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
          id: 1,
          symbol: "ADANIPORTS",
          name: "Adani Ports and Special Economic Zone Ltd.",
          isin: "INE742F01042",
          industry: "SERVICES",
          series: "EQ"
      },
      {
          id: 2,
          symbol: "ASIANPAINT",
          name: "Asian Paints Ltd.",
          isin: "INE021A01026",
          industry: "CONSUMER GOODS",
          series: "EQ"
      },
      {
          id: 3,
          symbol: "AXISBANK",
          name: "Axis Bank Ltd.",
          isin: "INE238A01034",
          industry: "FINANCIAL SERVICES",
          series: "EQ"
      },
      {
          id: 4,
          symbol: "BAJAJ-AUTO",
          name: "Bajaj Auto Ltd.",
          isin: "INE917I01010",
          industry: "AUTOMOBILE",
          series: "EQ"
      },
      {
          id: 5,
          symbol: "BAJAJFINSV",
          name: "Bajaj Finserv Ltd.",
          isin: "INE918I01018",
          industry: "FINANCIAL SERVICES",
          series: "EQ"
      },
      {
          id: 6,
          symbol: "BAJFINANCE",
          name: "Bajaj Finance Ltd.",
          isin: "INE296A01024",
          industry: "FINANCIAL SERVICES",
          series: "EQ"
      },
      {
          id: 7,
          symbol: "BHARTIARTL",
          name: "Bharti Airtel Ltd.",
          isin: "INE397D01024",
          industry: "TELECOM",
          series: "EQ"
      },
      {
          id: 8,
          symbol: "BPCL",
          name: "Bharat Petroleum Corporation Ltd.",
          isin: "INE029A01011",
          industry: "ENERGY",
          series: "EQ"
      },
      {
          id: 9,
          symbol: "BRITANNIA",
          name: "Britannia Industries Ltd.",
          isin: "INE216A01030",
          industry: "CONSUMER GOODS",
          series: "EQ"
      },
      {
          id: 10,
          symbol: "CIPLA",
          name: "Cipla Ltd.",
          isin: "INE059A01026",
          industry: "PHARMA",
          series: "EQ"
      },
      {
          id: 11,
          symbol: "COALINDIA",
          name: "Coal India Ltd.",
          isin: "INE522F01014",
          industry: "METALS",
          series: "EQ"
      },
      {
          id: 12,
          symbol: "DRREDDY",
          name: "Dr. Reddy's Laboratories Ltd.",
          isin: "INE089A01023",
          industry: "PHARMA",
          series: "EQ"
      },
      {
          id: 13,
          symbol: "EICHERMOT",
          name: "Eicher Motors Ltd.",
          isin: "INE066A01013",
          industry: "AUTOMOBILE",
          series: "EQ"
      },
      {
          id: 14,
          symbol: "GAIL",
          name: "GAIL (India) Ltd.",
          isin: "INE129A01019",
          industry: "ENERGY",
          series: "EQ"
      },
      {
          id: 15,
          symbol: "GRASIM",
          name: "Grasim Industries Ltd.",
          isin: "INE047A01021",
          industry: "CEMENT & CEMENT PRODUCTS",
          series: "EQ"
      },
      {
          id: 16,
          symbol: "HCLTECH",
          name: "HCL Technologies Ltd.",
          isin: "INE860A01027",
          industry: "IT",
          series: "EQ"
      },
      {
          id: 17,
          symbol: "HDFC",
          name: "Housing Development Finance Corporation Ltd.",
          isin: "INE001A01036",
          industry: "FINANCIAL SERVICES",
          series: "EQ"
      },
      {
          id: 18,
          symbol: "HDFCBANK",
          name: "HDFC Bank Ltd.",
          isin: "INE040A01034",
          industry: "FINANCIAL SERVICES",
          series: "EQ"
      },
      {
          id: 19,
          symbol: "HEROMOTOCO",
          name: "Hero MotoCorp Ltd.",
          isin: "INE158A01026",
          industry: "AUTOMOBILE",
          series: "EQ"
      },
      {
          id: 20,
          symbol: "HINDALCO",
          name: "Hindalco Industries Ltd.",
          isin: "INE038A01020",
          industry: "METALS",
          series: "EQ"
      },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  cards1=[];
  cards2= [];
  cards3=[];
  cards4= [];
  cards5=[];
  cards6= [];
  cards7=[];
  pieChart8= [];

  msg='';
  d=new Date();

  displayedColumns: string[] = ['id', 'symbol', 'name','isin','industry', 'series'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.cards1 = this.dashboardService.cards1();
    this.cards2= this.dashboardService.cards2();
    this.cards3 = this.dashboardService.cards3();
    this.cards4= this.dashboardService.cards4();
    this.cards5 = this.dashboardService.cards5();
    this.cards6= this.dashboardService.cards6();
    this.cards7= this.dashboardService.cards7();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
