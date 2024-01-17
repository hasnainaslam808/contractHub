import { TestBed } from '@angular/core/testing';

import { ServiceInterInterceptor } from './service-inter.interceptor';

describe('ServiceInterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ServiceInterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ServiceInterInterceptor = TestBed.inject(ServiceInterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
