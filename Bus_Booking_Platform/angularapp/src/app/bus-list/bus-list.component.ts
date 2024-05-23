import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../services/bus.service'; // Adjusted service name
import { Bus } from '../models/bus.model'; // Adjusted model name

@Component({
  selector: 'app-bus-list', // Adjusted selector
  templateUrl: './bus-list.component.html', // Adjusted template URL
  styleUrls: ['./bus-list.component.css'] // Adjusted style URL
})
export class BusListComponent implements OnInit {
  buses: Bus[] = []; // Adjusted property name

  constructor(private busService: BusService, private router: Router) { } // Adjusted service name

  ngOnInit(): void {
    this.loadBuses(); // Adjusted method name
  }

  loadBuses(): void {
    this.busService.getBuses().subscribe(buses => { // Adjusted method name
      this.buses = buses;
      console.log(this.buses);
    });
  }

  deleteBus(bookingId: number): void { // Adjusted method name and parameter
    // Navigate to confirm delete page with the booking ID as a parameter
    this.router.navigate(['/confirmDelete', bookingId]);
  }
}
