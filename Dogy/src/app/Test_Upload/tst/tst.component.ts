import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tst',
  templateUrl: './tst.component.html',
  styleUrls: ['./tst.component.css']
})
export class TstComponent implements OnInit {

  constructor() { }

  public selectedFile: any;

  ngOnInit(): void {
  }


  selecetdFile!: File;

  imagePreview : any;


  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(this.imagePreview)
    };
    reader.readAsDataURL(this.selecetdFile);
  }
  // OnUploadFile() {
  //   //Upload file here send a binary data
  //   this.http.post('yourdomain.com/file-upload', this.selectedFile)
  //     .subscribe(...);
  // }

}
