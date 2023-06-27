import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("Main Nav", () => {
  it("displays company name", () => {
    render(MainNav);
    const company = screen.getByText("CareerConnect");
    expect(company).toBeInTheDocument();
  });

  it("displays items for navigation", () => {
    render(MainNav);
    const naviMenItems = screen.getAllByRole("listitem");
    const navMenTexts = naviMenItems.map((item) => {
      return item.textContent;
    });
    expect(navMenTexts).toEqual(["Teams", "Locations", "Life at CareerConnect", "How we hire", "Students", "Jobs"])
    console.log(navMenTexts);
  })
});
