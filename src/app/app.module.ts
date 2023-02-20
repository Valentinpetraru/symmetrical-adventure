import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrossComponent } from './uikit/cross/cross.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import { SectionFutureComponent } from './section-future/section-future.component';
import { PortraitComponent } from './portrait/portrait.component';
import { QuoteComponent } from './quote/quote.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { HomeComponent } from './home/home.component';
import { ChattingComponent } from './chatting/chatting.component';
import { AboutComponent } from './about/about.component';
import { AboutOneComponent } from './about-one/about-one.component';
import { AboutTopComponent } from './about-top/about-top.component';
import { AboutSecondComponent } from './about-second/about-second.component';
import { Page404Component } from './page404/page404.component';
import { EarlyComponent } from './early/early.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CrossComponent,
    PresentationComponent,
    FooterComponent,
    SectionFutureComponent,
    PortraitComponent,
    QuoteComponent,
    ViewAboutComponent,
    HomeComponent,
    ChattingComponent,
    AboutComponent,
    AboutOneComponent,
    AboutTopComponent,
    AboutSecondComponent,
    Page404Component,
    EarlyComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
