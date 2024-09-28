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
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('trips')
@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a trip',
    description: '여행을 생성합니다.',
  })
  createTrip(@Body() createTripDto: CreateTripDto): Promise<Trip> {
    return this.tripsService.createTrip(createTripDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all trips',
    description: '모든 여행을 가져옵니다.',
  })
  @ApiResponse({
    status: 200,
    description: 'Get all trips',
    schema: {
      example: {
        trips: [
          {
            id: 'n',
            name: 'Trip',
            start_date: 'yyyy-mm-dd',
            end_date: 'yyyy-mm-dd',
          },
        ],
      },
    },
  })
  async getAllTrips() {
    const trips = await this.tripsService.getAllTrips();
    return { trips }; // 명시적으로 응답을 직접 설정
  }

  @Put(':trip_id')
  @ApiOperation({
    summary: 'Update a trip',
    description: '여행을 수정합니다.',
  })
  updateTrip(
    @Param('trip_id') tripId: number,
    @Body() updateTripDto: UpdateTripDto,
  ): Promise<Trip> {
    return this.tripsService.updateTrip(tripId, updateTripDto);
  }

  @Delete(':trip_id')
  @ApiOperation({
    summary: 'Delete a trip',
    description: '여행을 삭제합니다.',
  })
  deleteTrip(@Param('trip_id') tripId: number): Promise<void> {
    return this.tripsService.deleteTrip(tripId);
  }
}
