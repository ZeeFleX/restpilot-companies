import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Company } from '@prisma/client';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async createCompany(data: { name: string; address?: string }): Promise<Company> {
    return this.prisma.company.create({
      data,
    });
  }
}
