import { PrismaNotificationsRepository } from './prisma/repositories/prismm-notifications-repositories';
import { NotificationRepository } from '@application/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';

import { Module } from '@nestjs/common';

@Module({
    providers: [PrismaService,
        {
            provide: NotificationRepository,
            useClass: PrismaNotificationsRepository
        },
    ],
    exports: [ NotificationRepository]
})

export class DatabaseModule { }