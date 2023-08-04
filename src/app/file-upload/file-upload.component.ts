import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FlaskapiService } from '../services/flaskapi.service';
import { JsonToListService } from '../services/json-to-list.service';
import { SuccessfulLoginService } from '../services/successful-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor(
    private jsonToList: JsonToListService,
    private flaskApi: FlaskapiService,
    private formBuilder: FormBuilder,
    private successfulLogin: SuccessfulLoginService,
    private router: Router
  ) {}

  // Creating a Form using formBuilder service
  fileUploadForm = this.formBuilder.group({
    parameter: ['', [Validators.required]],
    month: ['', [Validators.required]],
    year: ['', Validators.required],
  });

  // Variable to get the file from User
  file: any;
  filePresent = false;
  fileUploadClick = false;
  enableResult = false;

  // Variables to hold form data
  resp: any;
  month = this.fileUploadForm.get('month');
  year = this.fileUploadForm.get('year');
  parameter = this.fileUploadForm.get('parameter');

  // Method to receive file from form and set it to file variable
  getFile(event: any): void {
    if (event.target.files[0] != null) {
      let filevalid = event.target.files[0].name.split('.');
      this.filePresent = filevalid[1] == 'csv';
      if (this.filePresent) {
        this.file = event.target.files[0];
      }
    } else {
      this.filePresent = false;
    }
    this.fileUploadClick = true;
  }

  // Method to convert input year and month to number of months
  monthMaker(): number {
    return (
      (Number(this.fileUploadForm.value.year) - 2019) * 12 +
      Number(this.fileUploadForm.value.month) +
      1
    );
  }

  // Method to create a json containing data to be sent to flask and send it server
  uploadDataForPrediction(): void {
    let formData = new FormData();
    formData.set('file', this.file);
    formData.set('parameter', String(this.fileUploadForm.value.parameter));
    formData.set('month', this.monthMaker().toString());

    this.flaskApi.postData('/api/predict/file', formData).subscribe((data) => {
      if (data.status == 'error') {
        this.router.navigate(['./error']);
      } else {
        this.getResultsFromServer();
      }
    });
  }

  // Method to get result data from Flask server
  getResultsFromServer(): void {
    this.resp = this.flaskApi
      .getData('http://127.0.0.1:5000/predict/results')
      .subscribe((data) => {
        if (data.status == 'error') {
          this.router.navigate(['./error']);
        } else {
          this.resp = data;
          this.jsonToList.toList(this.resp);
          this.enableResult = true;
        }
      });
  }

  ngOnInit(): void {
    if (this.successfulLogin.getLoginStatus() == 'notDone') {
      this.router.navigate(['/login']);
    }
  }
}
