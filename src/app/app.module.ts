import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pipe1Pipe } from './shared/pipe1.pipe';
import { Derect1Directive } from './shared/derect1.directive';
import { HeaderComponent } from './comman/header/header.component';
import { FooterComponent } from './comman/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Pipe1Pipe,
    Derect1Directive,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
