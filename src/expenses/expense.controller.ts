import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ExpensesService } from './expense.service';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post(':trip_id')
  createExpense(
    @Param('trip_id') tripId: number,
    @Body() expenseData: Partial<Expense>,
  ): Promise<Expense> {
    return this.expensesService.createExpense(tripId, expenseData);
  }

  @Get(':trip_id')
  getExpensesByTrip(
    @Param('trip_id') tripId: number,
    @Query('date') date?: string,
  ): Promise<Expense[]> {
    return this.expensesService.getExpensesByTrip(tripId, date);
  }

  @Put(':trip_id/:expense_id')
  updateExpense(
    @Param('trip_id') tripId: number,
    @Param('expense_id') expenseId: number,
    @Body() expenseData: Partial<Expense>,
  ): Promise<Expense> {
    return this.expensesService.updateExpense(tripId, expenseId, expenseData);
  }

  @Delete(':trip_id/:expense_id')
  deleteExpense(
    @Param('trip_id') tripId: number,
    @Param('expense_id') expenseId: number,
  ): Promise<void> {
    return this.expensesService.deleteExpense(tripId, expenseId);
  }
}
