import { TestBed } from '@angular/core/testing';

import { ChildernGuard } from './childern.guard';

describe('ChildernGuard', () => {
  let guard: ChildernGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildernGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
