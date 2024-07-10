import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemComponent } from './job-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Job } from '../../interface/job';

describe('JobItemComponent', () => {
  let component: JobItemComponent;
  let fixture: ComponentFixture<JobItemComponent>;
  let jobSpy: jasmine.SpyObj<Job>;

  beforeEach(async () => {
    jobSpy = jasmine.createSpyObj('Job', [], {
      companyLogo: 'logo.png',
      id: 1,
      title: 'Software Engineer',
      companyName: 'Tech Company',
      reference: 'REF123'
    });
    await TestBed.configureTestingModule({
      imports: [JobItemComponent, HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobItemComponent);
    component = fixture.componentInstance;
    component.job = jobSpy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
