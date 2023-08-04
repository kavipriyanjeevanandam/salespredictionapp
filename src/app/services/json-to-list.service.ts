import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonToListService {
  constructor() {}

  xpoints: number[] = [];
  ypoints: number[] = [];
  predicted: string = '';
  rmse: string = '';

  // Function to parse the incoming data in json format and store the values as x and y points

  toList(data: any): void {
    this.xpoints = [];
    this.ypoints = [];
    let count = Object.keys(data['x']).length;
    for (let i = 0; i < count; i++) {
      this.xpoints.push(data['x'][i.toString()]);
    }
    for (let i = 0; i < count; i++) {
      this.ypoints.push(data['y'][i.toString()] * 1);
    }
    this.predicted = data['predict'];
    this.rmse = data['rmse'];
  }
}
