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

  expect(getByRole("button", { name: "0" })).toBeInTheDocument();
  expect(getByRole("button", { name: "1" })).toBeInTheDocument();
  expect(getByRole("button", { name: "2" })).toBeInTheDocument();
  expect(getByRole("button", { name: "3" })).toBeInTheDocument();
  expect(getByRole("button", { name: "4" })).toBeInTheDocument();
  expect(getByRole("button", { name: "5" })).toBeInTheDocument();
  expect(getByRole("button", { name: "6" })).toBeInTheDocument();
  expect(getByRole("button", { name: "7" })).toBeInTheDocument();
  expect(getByRole("button", { name: "8" })).toBeInTheDocument();
  expect(getByRole("button", { name: "9" })).toBeInTheDocument();
  expect(getByRole("button", { name: "·" })).toBeInTheDocument();
  expect(getByRole("button", { name: "clean" })).toBeInTheDocument();
  expect(getByRole("button", { name: "negate" })).toBeInTheDocument();
  expect(getByRole("button", { name: "percent" })).toBeInTheDocument();
  expect(getByRole("button", { name: "divide" })).toBeInTheDocument();
  expect(getByRole("button", { name: "multiply" })).toBeInTheDocument();
  expect(getByRole("button", { name: "subtract" })).toBeInTheDocument();
  expect(getByRole("button", { name: "sum" })).toBeInTheDocument();
  expect(getByRole("button", { name: "equal" })).toBeInTheDocument();
});
