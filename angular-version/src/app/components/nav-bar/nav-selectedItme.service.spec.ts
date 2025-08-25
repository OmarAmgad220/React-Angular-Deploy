/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavSelectedItmeService } from './nav-selectedItme.service';

describe('Service: NavSelectedItme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavSelectedItmeService]
    });
  });

  it('should ...', inject([NavSelectedItmeService], (service: NavSelectedItmeService) => {
    expect(service).toBeTruthy();
  }));
});
