import { Component } from '@angular/core';
import {
   FormsModule,
   ReactiveFormsModule,
   FormGroup,
   FormControl
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'app works!';

  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2000, 11, 31);

  public myForm: FormGroup = new FormGroup({
    birthDate: new FormControl(new Date(2000, 10, 10))
  });
}
