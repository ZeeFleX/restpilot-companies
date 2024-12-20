import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Company } from "@prisma/client";
import { ICreateCompanyRequestDTO } from "src/types/shared/dto/companies/requests.dto";

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async createCompany(data: ICreateCompanyRequestDTO): Promise<Company> {
    return this.prisma.company.create({
      data,
    });
  }
}
