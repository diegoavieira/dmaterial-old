import { async, TestBed } from '@angular/core/testing';
import { DocHomeModule } from './doc-home.module';

describe('DocHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocHomeModule).toBeDefined();
  });
});
