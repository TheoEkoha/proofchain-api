import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies/companies.module';
import { Company } from './companies/companies.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Charge le fichier .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.SUPABASE_HOST,
      port: parseInt(process.env.SUPABASE_PORT, 10) || 5432,
      username: process.env.SUPABASE_USER,
      password: process.env.SUPABASE_PASSWORD,
      database: process.env.SUPABASE_DB,
      entities: [Company],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    CompaniesModule,
    AuthModule,
  ],
})
export class AppModule {}
