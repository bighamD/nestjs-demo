import { Test, TestingModule } from '@nestjs/testing';
import { MpostService } from './mpost.service';

describe('MpostService', () => {
  let service: MpostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpostService],
    }).compile();

    service = module.get<MpostService>(MpostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
