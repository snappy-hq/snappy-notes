import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MDEditor } from "../src/app/_components/tiptap/indexindex";
import { MenuBar } from "../src/app/_components/tiptap/menubarnubar";

describe("MDEditor component test with all necessary sub-components", () => {
  it("renders the component correctly", () => {
    render(<MDEditor />);
  });

  it("should not render the menubar without the editor context", () => {
    const { container } = render(<MenuBar />);

    expect(container.hasChildNodes()).toBeFalsy();
  });
});
