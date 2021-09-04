import DogFacts from "./DogFacts";
import {render, screen} from "@testing-library/react";


test('renders dog facts from an api call', async() => {
  const callDogApi = require('./CallDogApi');
    jest.spyOn(callDogApi,'callDogFactsApi').mockReturnValue(Promise.resolve('dogs are cute'));
    await render(<DogFacts />);
    const linkElement = screen.getByText(/Dog Facts: \w/g);
    expect(linkElement).toBeInTheDocument();
});