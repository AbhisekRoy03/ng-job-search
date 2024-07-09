import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobService } from '../../service/job.service';
import { Job } from '../../interface/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {

  job !: Job;

  constructor(private activatedRoute: ActivatedRoute, private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    const jobId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    this.jobService.getJobById(jobId).subscribe((job: Job) => (this.job = job));
    document.getElementById("jobsTab")?.setAttribute('class','router-link-active');
  }

  navigateToJobs() {
    this.router.navigate(["/"]);
  }
}
