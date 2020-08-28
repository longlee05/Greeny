import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';



import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ComponentsModule } from './components/components.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,

    ComponentsModule,
    

    NbEvaIconsModule,
    ComponentsModule,
    UiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
