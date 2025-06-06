import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ClinicsModule } from './clinics/clinics.module';
import { DoctorsModule } from './doctors/doctors.module';
import { MedicalServicesModule } from './services/services.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { MedicalService } from './services/entities/service.entity';
import { Clinic } from './clinics/entities/clinic.entity';
import { Doctor } from './doctors/entities/doctor.entity';
import { AuthService } from './auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { MailModule } from './mailService/mail.module';


@Module({
  imports: [AuthModule, ClinicsModule, DoctorsModule, MedicalServicesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'clinic',
      entities: [User, Clinic, Doctor, MedicalService],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    MailModule
  ],
  // providers:[{
  //   provide: APP_GUARD,
  //   useClass: RolesGuard,
  // }]


})
export class AppModule {
}
