import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import usersData from '../../../../json-server/db.json';
// import { User } from '../../models/user';

interface User {
  id: Number;
  name: String;
  email: String;
  password: String;
  phone: String;
}


@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrl: './manipulando-json.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ManipulandoJsonComponent {
  users: User[] = usersData.users;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(): void{
      console.log(this.users);
    }

}
