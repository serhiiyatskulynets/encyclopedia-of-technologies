import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

function Hello() {
  return <h1>Encyclopedia of Technologies</h1>;
}

test("відображає назву сайту", () => {
  render(<Hello />);

  expect(
    screen.getByRole("heading", {
      name: "Encyclopedia of Technologies",
    }),
  ).toBeInTheDocument();
});
