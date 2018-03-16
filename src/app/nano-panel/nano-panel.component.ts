import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nano-panel',
  templateUrl: './nano-panel.component.html',
  styleUrls: ['./nano-panel.component.scss']
})
export class NanoPanelComponent {
  @Input('cast') cast: any;
}
