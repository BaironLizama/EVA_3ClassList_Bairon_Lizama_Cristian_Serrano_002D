import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { QrCodeScannerService } from 'src/app/services/qr-code-scanner.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})

export class ScanPage {
  constructor(private qrCodeScannerService: QrCodeScannerService) {}

  scanQRCode() {
    const options: BarcodeScannerOptions = {
      // Puedes personalizar las opciones según tus necesidades
      prompt: 'Escanea el código QR', // Mensaje mostrado al usuario
    };

    this.qrCodeScannerService.scanQRCode(options)
      .then((barcodeData) => {
        console.log('Código escaneado:', barcodeData.text);
        // Aquí puedes manejar el resultado del escaneo, como enviarlo a tu servidor, etc.
      })
      .catch((err) => {
        console.error('Error al escanear el código QR', err);
      });
  }
}
  
