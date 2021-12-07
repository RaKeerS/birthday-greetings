import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingCardComponent } from './components/greeting-card/greeting-card.component';
import { GreetingsTemplateComponent } from './components/greetings-template/greetings-template.component';
import { HomeComponent } from './components/home/home.component';
import { PrimeNGModules } from './prime-ng/prime-ng-modules';
import { ModalTemplateService } from './services/modal-template.service';
import { BirthdayGreetingsState } from './store/birthday-greetings-store';
import { BgTemplate1Component } from './templates/greetings/birthday-greetings/bg-template1/bg-template1.component';
import { BirthdayGreetingsComponent } from './templates/greetings/birthday-greetings/birthday-greetings.component';
import { GreetingStyle1Component } from './templates/greetings/greeting-style1/greeting-style1.component';
import { TemplatedummyComponent } from './templates/miscellaneous/templatedummy/templatedummy.component';
import { BgTemplate2Component } from './templates/greetings/birthday-greetings/bg-template2/bg-template2.component';
import { BgTemplate3Component } from './templates/greetings/birthday-greetings/bg-template3/bg-template3.component';
import { BgTemplate4Component } from './templates/greetings/birthday-greetings/bg-template4/bg-template4.component';
import { AnimeGreetingsComponent } from './templates/greetings/anime-greetings/anime-greetings.component';
import { AgTemplate1Component } from './templates/greetings/anime-greetings/ag-template1/ag-template1.component';
import { AgTemplate2Component } from './templates/greetings/anime-greetings/ag-template2/ag-template2.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsTemplateComponent,
    HomeComponent,
    GreetingCardComponent,
    TemplatedummyComponent,
    GreetingStyle1Component,
    BirthdayGreetingsComponent,
    BgTemplate1Component,
    BgTemplate2Component,
    BgTemplate3Component,
    BgTemplate4Component,
    AnimeGreetingsComponent,
    AgTemplate1Component,
    AgTemplate2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxsModule.forRoot([BirthdayGreetingsState], { developmentMode: !environment.production }), // RECOMMENDATION: Set developmentMode to true on the NgxsModule when Angular is running in development mode. NgxsModule.forRoot(states, { developmentMode: !environment.production })
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      // key: 'global'  // commented for now since it was saving older keys and values in the store, i.e. those properties which were created during the beginning but were later removed in the localStorage of browser.
    }),

    PrimeNGModules,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added

    FormsModule,
    AppRoutingModule

  ],
  providers: [ModalTemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
