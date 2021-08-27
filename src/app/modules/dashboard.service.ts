import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
//Bigchart部分的data



  bigChart() {
    return [{
      name: 'Index1',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Index2',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Index3',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Index4',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Index5',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }
  cards() {
    return [1263389,1565365,531609, 691838, 550729, 721336];
  }
  cards1() {
    return [287922,370508,509598,922561,4941410,6637888];
  }
  cards2() {
    return [24821045,6932589,22739047,10607735,12369910,22049200];
  }
  cards3() {
    return [1394095,3688197,3741679,9470277,5494816,10672843];
  }
  cards4() {
    return [818275,1156179,586109,577045,1958323,12705275];
  }
  cards5() {
    return [13917385,5829571,7610734,5581641,21698149,26522972];
  }
  cards6() {
    return [9132749,14764995,2349001,2265791,2127801,1734439];
  }
  cards7() {
    return [2934548,7553387,12007586,12808349,628617,628902];
  }

  pieChart() {
    return [{
      name: 'ADANIPORTS',
      y: 31.41,
      sliced: true,
      selected: true
    }, {
      name: 'ASIANPAINT',
      y: 21.84
    }, {
      name: 'BAJAJ-AUTO',
      y: 20.85
    }, {
      name: 'OTHERS',
      y: 14.67
    }, {
      name: 'GRASIM',
      y: 4.18
    }, {
      name: 'EICHERMOT',
      y: 1.64
    }, {
      name: 'GRASIM',
      y: 1.6
    }, {
      name: 'HCLTECH',
      y: 1.2
    }, {
      name: 'DRREDDY',
      y: 2.61
    }];
  }
}
