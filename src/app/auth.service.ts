/**
 * Created by ren on 30/06/2017.
 */
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  canActivate() {
    return true;
  }
}
