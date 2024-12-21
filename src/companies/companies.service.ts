import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { CompaniesDTO } from "shared-types";
import { RpcException } from "@nestjs/microservices";
import { Logger } from "shared-functions";

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  @Logger("cyan")
  async createCompany(
    data: CompaniesDTO.Request.CreateCompany
  ): Promise<CompaniesDTO.Response.CreateCompany> {
    try {
      const createdCompany = await this.prisma.company.create({
        data,
      });

      if (!createdCompany) {
        throw new RpcException({
          code: 2001,
          message: "COMPANY_NOT_CREATED",
        });
      }

      return createdCompany;
    } catch (error) {
      return error;
    }
  }
}
