import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column()
  ownerName: string;

  @Column()
  email: string;

  @Column()
  address: string;
}
