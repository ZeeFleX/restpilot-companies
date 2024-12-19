import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { CompaniesController } from './companies/companies.controller';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [CompaniesModule, RabbitmqModule],
  controllers: [CompaniesController],
})
export class AppModule {}
