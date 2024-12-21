import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { CompaniesService } from "./companies.service";
import { Company } from "@prisma/client";
import { CompaniesDTO } from "src/types/shared";

@Controller()
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @MessagePattern("companies.company.create")
  async createCompany(
    payload: CompaniesDTO.Request.CreateCompany
  ): Promise<CompaniesDTO.Response.CreateCompany> {
    return this.companiesService.createCompany(payload);
  }
}
