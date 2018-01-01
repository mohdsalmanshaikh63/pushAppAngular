import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AppUser } from './app-user';
import { AppUserService } from './app-user.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appUsers: AppUser[] = [];

  constructor(private appUserService: AppUserService) {
    this.appUserService
      .getAllAppUsers()
      .subscribe(
        (appUsers) =>  {
          this.appUsers = appUsers;
        }
      );
  }

  /* onAddAppUser(appUser) {
    this.appUserService
      .createAppUser(appUser)
      .subscribe(
        newAppUser => {
          this.appUsers = this.appUsers.concat(newAppUser);
        }
      );
  }

  onRemoveAppUser(appUser) {
    this.appUserService
      .deleteAppUserById(appUser.id)
      .subscribe(
        (_) => {
          this.appUsers = this.appUsers.filter((u) => u.id !== appUser.id);
        }
      );
  } */

  ngOnInit() {
    $(document).foundation();
  }
}
