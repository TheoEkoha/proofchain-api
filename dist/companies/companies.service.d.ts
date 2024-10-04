import { Repository } from 'typeorm';
import { Company } from './companies.entity';
export declare class CompaniesService {
    private companiesRepository;
    constructor(companiesRepository: Repository<Company>);
    create(companyData: Company): Promise<Company>;
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company>;
    update(id: number, updateCompanyDto: any): Promise<Company>;
    remove(id: number): Promise<void>;
}
