import { TestBed } from '@angular/core/testing';

import { InfoTicketService } from './info-ticket.service';

describe('InfoTicketService', () => {
  let service: InfoTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
