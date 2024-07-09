import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../interface/job';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})
export class FavoriteListComponent implements OnInit{
  favoriteJobs: Job[] = [];

  constructor(private jobService: JobService){}

  ngOnInit(): void {
    this.favoriteJobs = this.jobService.getFavoriteJobs();
    document.getElementById("jobsTab")?.setAttribute('class','');
  }
}
