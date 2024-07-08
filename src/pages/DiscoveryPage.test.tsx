import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  vi,
  beforeEach,
  afterEach,
  beforeAll,
  describe,
  it,
  expect,
} from "vitest";
import {
  setupIntersectionMocking,
  resetIntersectionMocking,
} from "react-intersection-observer/test-utils";
import DiscoveryPage from "./DiscoveryPage";
import { genreMovieListData, genreTvListData } from "../mocks/handlers";
import LanguageProvider from "../components/LanguageSelector/LanguageProvider";
import FlixModalProvider from "../components/Modal/FlixModalProvider";

beforeEach(() => {
  setupIntersectionMocking(vi.fn);
});

afterEach(() => {
  resetIntersectionMocking();
});

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

describe("DiscoveryPage", () => {
  const queryClient = new QueryClient();

  genreMovieListData.genres.forEach((value) => {
    it("renders movie FilterBar component", async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <FlixModalProvider>
              <DiscoveryPage mediaType="movie" />
            </FlixModalProvider>
          </LanguageProvider>
        </QueryClientProvider>,
      );
      expect(await screen.findByText("sortedBy")).toBeInTheDocument();
      expect(await screen.findByText("popularity")).toBeInTheDocument();
      expect(await screen.findByText("topRated")).toBeInTheDocument();
      expect(screen.getByText("all")).toBeInTheDocument();
      expect(await screen.findByText(value.name)).toBeInTheDocument();
    });
  });

  genreTvListData.genres.forEach((value) => {
    it("renders tv FilterBar component", async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <FlixModalProvider>
              <DiscoveryPage mediaType="tv" />
            </FlixModalProvider>
          </LanguageProvider>
        </QueryClientProvider>,
      );
      expect(await screen.findByText("sortedBy")).toBeInTheDocument();
      expect(await screen.findByText("popularity")).toBeInTheDocument();
      expect(await screen.findByText("topRated")).toBeInTheDocument();
      expect(screen.getByText("all")).toBeInTheDocument();
      expect(await screen.findByText(value.name)).toBeInTheDocument();
    });
  });

  it("renders DiscoverPage of movie with all genre and sorted by popularity component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <DiscoveryPage mediaType="movie" />
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );

    expect(screen.getByText("all")).toBeInTheDocument();
    expect(screen.getByText("popularity")).toBeInTheDocument();

    expect(await screen.findByText("Damsel")).toBeInTheDocument();
    const discoverMovieImage = screen.getByRole("img", {
      name: /damsel/i,
    });
    expect(discoverMovieImage).toBeInTheDocument();

    expect(await screen.findByText("Kung Fu Panda 4")).toBeInTheDocument();
    const discoverMovieImage2 = screen.getByRole("img", {
      name: /kung fu panda 4/i,
    });
    expect(discoverMovieImage2).toBeInTheDocument();
  });

  it("renders DiscoverPage of movie with Action genre and sorted by top rated component", async () => {
    const user = userEvent.setup();

    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <DiscoveryPage mediaType="movie" />
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );

    const genreCombobox = screen.getByRole("combobox", { name: /genre/i });
    await user.selectOptions(genreCombobox, "28");
    expect(genreCombobox).toHaveValue("28");

    const sortByCombobox = screen.getByRole("combobox", { name: /sortedBy/i });
    await user.selectOptions(sortByCombobox, "top rated");
    expect(sortByCombobox).toHaveValue("top rated");

    expect(await screen.findByText("The Dark Knight")).toBeInTheDocument();
    const discoverMovieImage = screen.getByRole("img", {
      name: /the dark knight/i,
    });
    expect(discoverMovieImage).toBeInTheDocument();

    expect(
      await screen.findByText("The Lord of the Rings: The Return of the King"),
    ).toBeInTheDocument();
    const discoverMovieImage2 = screen.getByRole("img", {
      name: /the lord of the rings: the return of the king/i,
    });
    expect(discoverMovieImage2).toBeInTheDocument();
  });

  it("renders DiscoverPage of tv with all genre and sorted by top rated component", async () => {
    const user = userEvent.setup();

    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <DiscoveryPage mediaType="tv" />
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );

    const genreCombobox = screen.getByRole("combobox", { name: /genre/i });
    await user.selectOptions(genreCombobox, "all");
    expect(genreCombobox).toHaveValue("all");

    const sortByCombobox = screen.getByRole("combobox", { name: /sortedBy/i });
    await user.selectOptions(sortByCombobox, "top rated");
    expect(sortByCombobox).toHaveValue("top rated");

    expect(await screen.findByText("Hazbin Hotel")).toBeInTheDocument();
    const discoverMovieImage = screen.getByRole("img", {
      name: /hazbin hotel/i,
    });
    expect(discoverMovieImage).toBeInTheDocument();

    expect(await screen.findByText("Breaking Bad")).toBeInTheDocument();
    const discoverMovieImage2 = screen.getByRole("img", {
      name: /breaking bad/i,
    });
    expect(discoverMovieImage2).toBeInTheDocument();
  });

  it("renders DiscoverPage of tv with Comedy genre and sorted by popularty component", async () => {
    const user = userEvent.setup();

    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <DiscoveryPage mediaType="tv" />
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );

    const genreCombobox = screen.getByRole("combobox", { name: /genre/i });
    await user.selectOptions(genreCombobox, "35");
    expect(genreCombobox).toHaveValue("35");

    const sortByCombobox = screen.getByRole("combobox", { name: /sortedBy/i });
    await user.selectOptions(sortByCombobox, "popularity");
    expect(sortByCombobox).toHaveValue("popularity");

    expect(
      await screen.findByText("Good Mythical Morning"),
    ).toBeInTheDocument();
    const discoverMovieImage = screen.getByRole("img", {
      name: /good mythical morning/i,
    });
    expect(discoverMovieImage).toBeInTheDocument();

    expect(
      await screen.findByText("Watch What Happens Live with Andy Cohen"),
    ).toBeInTheDocument();
    const discoverMovieImage2 = screen.getByRole("img", {
      name: /watch what happens live with andy cohen/i,
    });
    expect(discoverMovieImage2).toBeInTheDocument();
  });

  it("should open modal on button click", async () => {
    const user = userEvent.setup();

    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <DiscoveryPage mediaType="tv" />
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );

    const haloButton = await screen.getByRole("button", { name: /halo/i });
    expect(haloButton).toBeInTheDocument();
    await user.click(haloButton);
    const modal = screen.getByRole("presentation", { hidden: true });
    expect(modal).toBeInTheDocument();
  });

  it("should close modal on button click", async () => {
    const user = userEvent.setup();

    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <DiscoveryPage mediaType="tv" />
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );

    const haloButton = await screen.getByRole("button", { name: /halo/i });
    expect(haloButton).toBeInTheDocument();
    await user.click(haloButton);

    const button = await screen.getByTestId("closeModalButton");
    await user.click(button);
  });
});
