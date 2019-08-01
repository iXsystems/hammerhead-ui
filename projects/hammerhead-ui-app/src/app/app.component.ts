import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hammerhead-ui-app';

  public onAction(): void {
    console.log('action clicked!');
  }
}
