import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Company } from "@prisma/client";
import { CompaniesDTO } from "src/types/shared/dto/companies";

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async createCompany(
    data: CompaniesDTO.Request.CreateCompany
  ): Promise<Company> {
    return this.prisma.company.create({
      data,
    });
  }
}
