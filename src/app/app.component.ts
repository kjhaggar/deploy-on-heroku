import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'deploy-sample';
    users: any
    matchPassword: boolean;
    submitted: boolean;

    regiForm: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        userName: new FormControl(null, Validators.required),
        // firstName: new FormControl(null, Validators.required),
        // lastName: new FormControl(null, Validators.required),
        // password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    constructor(private authService: AuthService, private router: Router) {}

    get f() { return this.regiForm.controls; } 

    Register() {
        this.submitted = true;

        if (this.regiForm.invalid) {
            return;
        }
        
        this.authService.register(JSON.stringify(this.regiForm.value)).subscribe(
          data => {
              console.log(data)
            },
          error => {
              console.error(error);
            }
        );
    }

    Display = () => {
        this.authService.showList().subscribe(
            data => {
                this.users=data;
            },
            error => {
                console.error(error);
            }
        );

    }
}
