import { getQueriesForElement } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

function render(html) {
  const dom = new JSDOM(html, { runScripts: "dangerously" });
  const container = dom.window.document.body;
  return {
    container,
    ...getQueriesForElement(container),
  };
}

test("renders buttons", () => {
  const { getByRole } = render(html);

  expect(getByRole("button", { name: /0/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /1/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /2/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /3/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /4/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /5/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /6/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /7/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /8/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /9/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /·/i })).toBeInTheDocument();
});
