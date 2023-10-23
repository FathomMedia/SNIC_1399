import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppBannerComponent } from './download-app-banner.component';

describe('DownloadAppBannerComponent', () => {
  let component: DownloadAppBannerComponent;
  let fixture: ComponentFixture<DownloadAppBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadAppBannerComponent]
    });
    fixture = TestBed.createComponent(DownloadAppBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
