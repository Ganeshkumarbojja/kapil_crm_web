/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { TestBed } from '@angular/core/testing';

import { MastersService } from './masters.service';

describe('MastersService', () => {
  let service: MastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
