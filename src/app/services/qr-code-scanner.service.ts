// qr-code-scanner.service.ts
import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root',
})
export class QrCodeScannerService {
  constructor(private barcodeScanner: BarcodeScanner) {}

  scanQRCode(options?: BarcodeScannerOptions): Promise<BarcodeScanResult> {
    return this.barcodeScanner.scan(options);
  }
}

