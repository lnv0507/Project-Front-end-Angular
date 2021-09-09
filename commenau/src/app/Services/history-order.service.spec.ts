import { TestBed } from '@angular/core/testing';

import { HistoryOrderService } from './history-order.service';

describe('HistoryOrderService', () => {
  let service: HistoryOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
