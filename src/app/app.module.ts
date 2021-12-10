import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BotaoComponent } from './main/botao/botao.component';
import { LinhaComponent } from './main/linha/linha.component';
import { VisorComponent } from './main/visor/visor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BotaoComponent,
    LinhaComponent,
    VisorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
