import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TripsService } from './trip.service';
import { Trip } from './trip.entity';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  createTrip(@Body() tripData: Partial<Trip>): Promise<Trip> {
    return this.tripsService.createTrip(tripData);
  }

  @Get()
  getAllTrips(): Promise<Trip[]> {
    return this.tripsService.getAllTrips();
  }

  @Put(':trip_id')
  updateTrip(
    @Param('trip_id') tripId: number,
    @Body() tripData: Partial<Trip>,
  ): Promise<Trip> {
    return this.tripsService.updateTrip(tripId, tripData);
  }

  @Delete(':trip_id')
  deleteTrip(@Param('trip_id') tripId: number): Promise<void> {
    return this.tripsService.deleteTrip(tripId);
  }
}
