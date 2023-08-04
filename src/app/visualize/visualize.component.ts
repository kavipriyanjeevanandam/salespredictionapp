import { Component, OnInit } from '@angular/core';
import { JsonToListService } from '../services/json-to-list.service';
import { WriteFileService } from '../services/write-file.service';
import { SuccessfulLoginService } from '../services/successful-login.service';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css'],
})
export class VisualizeComponent implements OnInit {
  constructor(
    private jsonToList: JsonToListService,
    private writeFile: WriteFileService,
    private successfulLogin: SuccessfulLoginService,
    private router: Router
  ) {
    Chart.register(...registerables);
  }
  chart: any;
  rmse: string = '';
  prediction: string = '';

  // Function to download the predicted values

  download(): void {
    this.writeFile.downloadCsvFile();
  }

  ngOnInit(): void {
    if (this.successfulLogin.getLoginStatus() == 'notDone') {
      this.router.navigate(['/login']);
    }

    // To display chart showing reports

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.jsonToList.xpoints,
        datasets: [
          {
            label: 'Previous Sales',
            data: this.jsonToList.ypoints.slice(0, 206),
            borderWidth: 1,
            borderColor: 'red',
          },
          {
            label: 'Predicted Sales',
            data: this.jsonToList.ypoints,
            borderWidth: 1,
          },
        ],
      },
    });
    this.rmse = this.jsonToList.rmse;
    this.prediction = this.jsonToList.predicted;
  }
}
