import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { CompaniesService } from "./companies.service";
import { CompaniesDTO } from "shared-types";

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
