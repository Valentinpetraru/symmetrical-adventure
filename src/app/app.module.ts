import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrossComponent } from './uikit/cross/cross.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import { SectionFutureComponent } from './section-future/section-future.component';

@NgModule({
  declarations: [
    AppComponent,
    CrossComponent,
    PresentationComponent,
    FooterComponent,
    SectionFutureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
