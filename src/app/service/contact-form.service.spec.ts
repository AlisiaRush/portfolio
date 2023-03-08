import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ContactFormService } from './contact-form.service';

describe('ContactFormService', () => {
  let service: ContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(ContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
