import { Player } from './player';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player("Nathan Quinn", 17, 29, 54, new Date(2007, 8, 29), "Center", "Quebec Remparts")).toBeTruthy();
  });
});
