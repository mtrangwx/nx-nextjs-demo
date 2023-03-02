import { render } from '@testing-library/react';

import PartyPopper from './party-popper';

describe('PartyPopper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PartyPopper />);
    expect(baseElement).toBeTruthy();
  });
});
