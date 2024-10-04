import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './companies.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(Number(id));
  }

  @Post()
  create(@Body() companyData: Company) {
    return this.companiesService.create(companyData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() companyData: Partial<Company>) {
    return this.companiesService.update(Number(id), companyData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(Number(id));
  }
}
