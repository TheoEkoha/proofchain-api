import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './companies.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
  ) {}

  async create(companyData: Company): Promise<Company> {
    const company = this.companiesRepository.create(companyData);
    return this.companiesRepository.save(company);
  }

  findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  findOne(id: number): Promise<Company> {
    return this.companiesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCompanyDto: any): Promise<Company> {
    await this.companiesRepository.update(id, updateCompanyDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.companiesRepository.delete(id);
  }
}