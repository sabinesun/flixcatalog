import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import Backdrop from "../Backdrop";
import { flixWithImage, flixWithNoImage } from "./Backdrop.mocks";

describe("Backdrop", () => {
  it("should render no image available message if backdrop_path is null", async () => {
    // ARRANGE
    render(<Backdrop flix={flixWithNoImage} />);

    // ACT
    const noImageText = await screen.findByText("noImageAvailable");
    const title = await screen.findByText(flixWithNoImage.title || "");

    // ASSERT
    expect(noImageText).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("should render backdrop image if backdrop_path is not null", async () => {
    // ARRANGE
    render(<Backdrop flix={flixWithImage} />);

    // ACT
    const title = await screen.findByText(flixWithImage.name || "");
    const image = screen.getByRole("img", {
      name: /death note/i,
    });

    // ASSERT
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
