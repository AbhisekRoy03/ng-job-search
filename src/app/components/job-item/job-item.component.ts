import { Component, Input } from '@angular/core';
import { Job } from '../../interface/job';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css'
})
export class JobItemComponent {
  @Input() job !: Job;

  constructor(private jobService: JobService){}
  
  toggleFavorite() {
    this.job.favorite = !this.job.favorite;
    let contains: Job = this.jobService.getFavoriteJobs().filter( job => job.id === this.job.id)[0];
    if(contains !== undefined){
      if(!this.job.favorite)
        this.jobService.removeFromFavorites(this.job);
    }
    else{
      if(this.job.favorite)
        this.jobService.addToFavorites(this.job);
    }       
  }
}
