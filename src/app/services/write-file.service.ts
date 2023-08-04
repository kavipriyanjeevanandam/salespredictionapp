import { Injectable } from '@angular/core';
import { JsonToListService } from './json-to-list.service';
@Injectable({
  providedIn: 'root',
})
export class WriteFileService {
  constructor(private jsonToList: JsonToListService) {}

  // Funtion to merge x and y points from predicted result to form 2D data List

  private mergeDataPoints(): number[][] {
    let csvdata: number[][] = [];
    for (let i = 0; i < this.jsonToList.xpoints.length; i++) {
      csvdata.push([this.jsonToList.xpoints[i], this.jsonToList.ypoints[i]]);
    }
    return csvdata;
  }

  //Function to make csv file format using merged data from mergeDataPoints function

  private makeCsvFile(): string {
    let csv = 'Date,Sales\n';
    let csvdata = this.mergeDataPoints();
    csvdata.forEach((row) => {
      csv += row.join(',');
      csv += '\n';
    });
    console.log(csv);
    return csv;
  }

  // Function to Download the csv file

  downloadCsvFile(): void {
    this.mergeDataPoints();
    let downLoadElement = document.createElement('a');
    downLoadElement.href =
      'data:text/csv;charset=utf-8,' + encodeURI(this.makeCsvFile());
    downLoadElement.target = '_blank';

    downLoadElement.download = 'Alcohol_Sales_Prediction.csv';
    downLoadElement.click();
  }
}
