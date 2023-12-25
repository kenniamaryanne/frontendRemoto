import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  isLoading = false;
  private loadingSubscription!: Subscription;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
