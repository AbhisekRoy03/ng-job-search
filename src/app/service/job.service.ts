import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Job } from '../interface/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url: string = '/jobs';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url).pipe(
      map((jobs: Job[]) => {
        return jobs.map((job: Job) => {
          job.favorite = this.getFavoriteJobs().some(favJob => favJob.id === job.id);
          return job;
        });
      })
    );
  }

  getFavoriteJobs(): Job[] {
    let favoritesJSON: string | null = localStorage.getItem("favorites");
    let favorites: Job[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
    return favorites;
  }

  addToFavorites(job: Job) {
    const favorites = this.getFavoriteJobs();
    favorites.push(job);
    this.updateFavorites(favorites);
  }

  removeFromFavorites(job: Job) {
    const favorites = this.getFavoriteJobs().filter(j => j.id !== job.id);
    this.updateFavorites(favorites);
  }

  updateFavorites(favorites: Job[]) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  getJobById(id: string|null): Observable<Job> {
    return this.http.get<Job>(`${this.url}/${id}`);
  }
}
