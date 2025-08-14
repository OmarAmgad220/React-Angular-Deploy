/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicServiceService } from './music-service.service';

describe('Service: MusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicServiceService]
    });
  });

  it('should ...', inject([MusicServiceService], (service: MusicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
