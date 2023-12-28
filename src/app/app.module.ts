import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfConverterComponent } from './pdf-converter/pdf-converter.component';
import { PdfService } from './pdf.service';
import { A4PageComponent } from './a4-page/a4-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfConverterComponent,
    A4PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [PdfService],
  bootstrap: [AppComponent, PdfConverterComponent]
})
export class AppModule { }
