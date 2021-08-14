import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import 'quill-emoji/dist/quill-emoji.js'

import Quill from 'quill';

const parchment = Quill.import('parchment')
const block = parchment.query('block')
block.tagName = 'DIV'
// or class NewBlock extends Block {} NewBlock.tagName = 'DIV'
Quill.register(block /* or NewBlock */, true)

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {
  @ViewChild('editor', {static: true}) editor: ElementRef;

  modules = {}

  constructor() {
    this.modules = {
      'emoji-shortname': false,
      'emoji-textarea': false,
      'emoji-toolbar': true,
      'toolbar': { container:  ['blockquote', 'code-block', 'bold', 'italic', 'underline', 'emoji', 'strike', 'image', { 'list': 'ordered' }, { 'list': 'bullet' }, 'clean'], }
    }
   }

  ngOnInit(): void {
  }

}
