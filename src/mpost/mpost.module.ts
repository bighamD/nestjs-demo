import { Module } from '@nestjs/common';
import { PostsController } from './mpost.controller';
import { MpostService } from './mpost.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './mpost.entity';

@Module({
  controllers: [PostsController],
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  providers: [MpostService]
})
export class MpostModule {}
