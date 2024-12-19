import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CompaniesService } from './companies.service';
import { Company } from '@prisma/client';

@Controller()
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @MessagePattern({ cmd: 'createCompany' })
  async createCompany(data: { name: string; address?: string }): Promise<Company> {
    return this.companiesService.createCompany(data);
  }
}
