import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import NavbarLink from "../NavbarLink";

describe("NavbarLink", () => {
  it("renders NavbarLink component", () => {
    render(
      <BrowserRouter>
        <NavbarLink isMobile />
      </BrowserRouter>,
    );

    const homeLink = screen.getByText("home");
    const serieLink = screen.getByText("movie");
    const movieLink = screen.getByText("serie");

    expect(homeLink).toBeInTheDocument();
    expect(serieLink).toBeInTheDocument();
    expect(movieLink).toBeInTheDocument();
  });

  it("changes link color when clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <NavbarLink isMobile={false} />
      </BrowserRouter>,
    );
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    const serieLink = screen.getByRole("link", {
      name: /serie/i,
    });
    const movieLink = screen.getByRole("link", {
      name: /movie/i,
    });

    await user.click(homeLink);
    expect(homeLink).toHaveFocus();

    await user.click(serieLink);
    expect(serieLink).toHaveFocus();

    await user.click(movieLink);
    expect(movieLink).toHaveFocus();
  });
});
