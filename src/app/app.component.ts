import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public registerForm;
  public submitted = false;
  public data;


  ngOnInit() {
    this.registerForm = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        zip: new FormControl(),
        city: new FormControl()
      })
    });
  }

  submit(ef) {
    this.submitted = true;
    this.data = JSON.stringify(ef);
    console.log('Template-driven form submitted: ', ef.value);
    console.log(ef.valid);
  }
}
