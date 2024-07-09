import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Job } from '../../interface/job';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterModule, JobItemComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{
  jobs: Job[] = [];

  constructor(private jobService: JobService, private route: ActivatedRoute) {} 

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }
}
