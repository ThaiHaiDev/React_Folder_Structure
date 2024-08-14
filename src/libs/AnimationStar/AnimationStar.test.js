import { render, screen } from '@testing-library/react';
import AnimationStar from './AnimationStar';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<AnimationStar />);
    const heading = screen.getByText(/Hello world! I am using React/i);
    expect(heading).toBeInTheDocument();
  });
});
