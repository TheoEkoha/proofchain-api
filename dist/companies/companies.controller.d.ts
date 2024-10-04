import { CompaniesService } from './companies.service';
import { Company } from './companies.entity';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company>;
    create(companyData: Company): Promise<Company>;
    update(id: string, companyData: Partial<Company>): Promise<Company>;
    remove(id: string): Promise<void>;
}
