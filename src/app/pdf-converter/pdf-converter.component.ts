import { Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService } from '../pdf.service';
import { Invioce } from '../invoice.model';
import { InvoiceService } from '../invoice.service';
import { A4PageComponent } from '../a4-page/a4-page.component';

@Component({
  selector: 'app-pdf-converter',
  templateUrl: './pdf-converter.component.html',
  styleUrls: ['./pdf-converter.component.css']
})
export class PdfConverterComponent {
  @ViewChild('contentToConvert', { static: false }) contentToConvert!: ElementRef;

  invoices: Invioce[] = [];

  constructor(
    private pdfService: PdfService,
    private invoiceService: InvoiceService
    ) {
    this.invoices = this.invoiceService.generateInvoice(100)
  }

  getPageCount(): number {
    return Math.ceil(this.invoices.length / 10);
  }
  
  getPageIndexes(): number[] {
    return Array.from({ length: this.getPageCount() }, (_, index) => index);
  }
  
  getInvoicesForPage(pageIndex: number): Invioce[] {
    const startIndex = pageIndex * 10;
    return this.invoices.slice(startIndex, startIndex + 10);
  }
  exportToPdf() {
    const elementId = 'contentToConvert';
    const fileName = 'converted_file';
    this.pdfService.exportToPdf(elementId, fileName);
  }
}