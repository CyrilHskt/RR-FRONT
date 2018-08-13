import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbcode-editor',
  templateUrl: './bbcode-editor.component.html',
  styleUrls: ['./bbcode-editor.component.css']
})
export class BbcodeEditorComponent {

  source;

  log(textarea) {
    console.log(textarea);
  }

}
