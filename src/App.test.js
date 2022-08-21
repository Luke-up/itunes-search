import { render, screen } from "@testing-library/react";
import Rectangle from "./components/Rectangle";
import Square from "./components/Square.js";
import List from "./components/List.js";
import Navigation from "./components/Navigation";
import SelectorMenu from "./components/SelectorMenu.js";

//test the page display
describe("renders display layouts", () => {
  test("renders the layout with rectangle cards", () => {
    const movie = render(
      <Rectangle
        mediaType="movie"
        attribute="movieTerm"
        searchTerm="Lucy"
        limit={1}
      />
    );
    expect(movie).toMatchSnapshot();
  });
  test("renders the layout with square cards", () => {
    const software = render(
      <Square mediaType="software" searchTerm="Spotify" limit={1} />
    );
    expect(software).toMatchSnapshot();
  });
  test("renders the layout with a table", () => {
    const book = render(
      <List mediaType="ebook" searchTerm="The secret garden" limit={1} />
    );
    expect(book).toMatchSnapshot();
  });
});

//tests the navigation bar render
test("renders the navigation bar", () => {
  const screen = render(<Navigation />);
  expect(screen).toMatchSnapshot();
});

//tests functional component with different input
describe("Renders the dropdown bar correctly", () => {
  test("renders the search criteria dropdown bar", async () => {
    render(<SelectorMenu mediaType="software" />);
    expect(screen.getByRole("option")).toHaveTextContent("Search by name");
  });
  test("renders the search criteria dropdown bar", async () => {
    render(<SelectorMenu mediaType="movie" />);
    expect(screen.getByRole("combobox")).toHaveDisplayValue(
      "Choose a search criteria"
    );
  });
});
