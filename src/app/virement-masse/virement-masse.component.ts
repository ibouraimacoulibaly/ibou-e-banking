import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-virement-masse',
  templateUrl: './virement-masse.component.html',
  styleUrls: ['./virement-masse.component.css']
})
export class VirementMasseComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ itemAlias: 'photo'});
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

}
