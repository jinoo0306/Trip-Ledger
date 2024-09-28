import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { TripsModule } from './trips/trip.module';
import { ExpensesModule } from './expenses/expense.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TripsModule, ExpensesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
