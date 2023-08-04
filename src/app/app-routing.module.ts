import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SignUpPageComponent } from './signup-page/signup-page.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { ErrorComponent } from './error/error.component';
import { PowerbiresultComponent } from './powerbiresult/powerbiresult.component';
const routes: Routes = [
  { path: '', component: SignUpPageComponent },
  { path: 'login', component: SignUpPageComponent },
  { path: 'prediction', component: FileUploadComponent },
  { path: 'visualize', component: VisualizeComponent },
  { path: 'result', component: PowerbiresultComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
