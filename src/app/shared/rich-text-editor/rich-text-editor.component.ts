import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {

  public quillConfiguration = {};

  constructor() {
    this.quillConfiguration = {
      // 'emoji-shortname': true,
      // 'emoji-textarea': true,
      // 'emoji-toolbar': true,
      'toolbar': [
        ['blockquote', 'code-block', 'bold', 'italic', 'underline', 'emoji', 'strike', 'image', { 'list': 'ordered' }, { 'list': 'bullet' }, 'clean'],        // toggled buttons


        // [{ 'header': 1 }, { 'header': 2 }],               // custom button values

        // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction

        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        // [{ 'font': [] }],
        // [{ 'align': [] }],

        // ['link', 'image', 'video'],                         // link and image, video


      ]
    }
   }

  ngOnInit(): void {
  }

}
