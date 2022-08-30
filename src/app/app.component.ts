import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './app.module';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private oauthService:OAuthService,private authService:AuthService){
    this.oauthService.configure(authCodeFlowConfig)
    this.authService.runInitialLoginSequence().then(console.log)
  }
  title = 'product-listing';
}
