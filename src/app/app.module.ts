import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './signup-page/signup-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UsersDataBaseService } from './services/users-data-base-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { NgChartsModule } from 'ng2-charts';
import { ErrorComponent } from './error/error.component';

import { PowerbiresultComponent } from './powerbiresult/powerbiresult.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    FileUploadComponent,
    VisualizeComponent,
    ErrorComponent,
    PowerbiresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [UsersDataBaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
