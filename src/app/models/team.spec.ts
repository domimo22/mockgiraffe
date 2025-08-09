import { Team } from './team';

describe('Team', () => {
  it('should create an instance', () => {
    expect(new Team("Vancouver Canucks")).toBeTruthy();
  });
});
