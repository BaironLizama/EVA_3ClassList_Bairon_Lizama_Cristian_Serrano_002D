import { TestBed } from '@angular/core/testing';

import { QrCodeScannerService } from './qr-code-scanner.service';

describe('QrCodeScannerService', () => {
  let service: QrCodeScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrCodeScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
