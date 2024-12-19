import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
