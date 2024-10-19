import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MDEditor } from "~/app/notes/_components/tiptap";
import { MenuBar } from "~/app/notes/_components/tiptap/menu/menubar";

describe("MDEditor component test with all necessary sub-components", () => {
  it("renders the component correctly", () => {
    render(<MDEditor />);
  });

  it("should not render the menubar without the editor context", () => {
    const { container } = render(<MenuBar />);

    expect(container.hasChildNodes()).toBeFalsy();
  });
});
