import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { Company } from './companies.entity'; // L'entité Company

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]), // Ajoute l'entité Company ici
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [CompaniesService], // Optionnel : si tu veux utiliser CompaniesService dans d'autres modules
})
export class CompaniesModule {}
