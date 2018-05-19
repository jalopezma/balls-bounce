import { BouncerModule } from './bouncer.module';

describe('BouncerModule', () => {
  let bouncerModule: BouncerModule;

  beforeEach(() => {
    bouncerModule = new BouncerModule();
  });

  it('should create an instance', () => {
    expect(bouncerModule).toBeTruthy();
  });
});
