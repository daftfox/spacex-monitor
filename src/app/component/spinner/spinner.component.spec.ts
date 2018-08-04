import { TestBed, async } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('SpinnerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' }]

    }).compileComponents();
  }));

  it('should create the spinner component', async(() => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const spinner = fixture.debugElement.componentInstance;
    expect(spinner).toBeTruthy();
  }));
});

