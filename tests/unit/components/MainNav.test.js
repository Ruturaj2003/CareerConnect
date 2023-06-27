import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("Main Nav", () => {
  it("displays company name", () => {
    render(MainNav);
    const company = screen.getByText("CareerConnect");
    expect(company).toBeInTheDocument();
  });
});
