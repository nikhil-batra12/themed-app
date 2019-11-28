/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NbPasswordAuthStrategy, NbAuthModule,NbAuthJWTToken } from "@nebular/auth";
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          baseEndpoint: "http://localhost:3000",
          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells where to look for the token
          },
          login: {
            endpoint: "/api/user/login",
            method: 'post',
            redirect: {
              success: '/dashboard/',
              failure: null
            },
            defaultMessages: ["hey you"]
          }
        })
      ],
      forms: {
        login: {
          redirectDelay: 0, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          socialLinks: [], // social links at the bottom of a page
        },
        validation: {
          password: {
            required: true,
            minLength: 2,
            maxLength: 50,
          },
          email: {
            required: true,
          }
        },
      }
    }),

    AppRoutingModule,
    
    ThemeModule.forRoot(),

    
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
