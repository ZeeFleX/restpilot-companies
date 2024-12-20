import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { CompaniesService } from "./companies.service";
import { Company } from "@prisma/client";
import { ICreateCompanyRequestDTO } from "src/types/shared/dto/companies/requests.dto";

@Controller()
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @MessagePattern("company.create")
  async createCompany(payload: ICreateCompanyRequestDTO): Promise<Company> {
    return this.companiesService.createCompany(payload);
  }
}
