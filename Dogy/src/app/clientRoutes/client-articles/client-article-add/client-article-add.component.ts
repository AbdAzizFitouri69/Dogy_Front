import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { User } from 'src/app/models/User';
import { ArticlesService } from 'src/app/services/Admin-Services/Articles/articles.service';
import { AdminUsersService } from 'src/app/services/Admin-Services/Users/admin-users.service';

@Component({
  selector: 'app-client-article-add',
  templateUrl: './client-article-add.component.html',
  styleUrls: ['./client-article-add.component.css']
})
export class ClientArticleAddComponent implements OnInit {

  constructor(private articleService: ArticlesService, private userService: AdminUsersService, private dgRef: MatDialogRef<ClientArticleAddComponent>) { }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['insertImage',
        'insertVideo',
        'toggleEditorMode']
    ]
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl('', [Validators.required]),
      titre: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required])
    })
    this.userService.getOneUser(localStorage.getItem('email')).subscribe(res => {
      this.user = res;
      console.log(this.user)
    })

  }

  form!: FormGroup;

  selecetdFile!: File

  imagePreview: any

  user!: User;

  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      //console.log(this.imagePreview)
    };
    reader.readAsDataURL(this.selecetdFile);
  }

  submit() {
    if (this.form.valid) {
      console.log(this.user)
      const fd = new FormData();
      fd.append('image', this.selecetdFile, this.selecetdFile.name)
      fd.append('titre', this.form.value.titre)
      fd.append('contenu', this.form.value.contenu)
      fd.append('idUser', this.user.idUser.toString())
      console.log(this.user.idUser)
      this.articleService.addArticle(fd, this.user.idUser).subscribe(() => {
        this.dgRef.close();
      })

    }
  }

}
