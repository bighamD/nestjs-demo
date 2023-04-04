import { Test, TestingModule } from '@nestjs/testing';
import { MpostController } from './mpost.controller';

describe('MpostController', () => {
  let controller: MpostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpostController],
    }).compile();

    controller = module.get<MpostController>(MpostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
