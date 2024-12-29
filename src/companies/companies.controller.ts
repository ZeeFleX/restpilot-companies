import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { CompaniesService } from "./companies.service";
import { CompaniesDTO } from "shared-types";
import { Logger } from "shared-functions";

@Controller()
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @MessagePattern("companies.company.create")
  @Logger("cyan")
  async createCompany(
    data: CompaniesDTO.Request.CreateCompany
  ): Promise<CompaniesDTO.Response.CreateCompany> {
    return this.companiesService.createCompany(data);
  }
}
