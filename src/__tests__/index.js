import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import { screen, fireEvent, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

async function render() {
  const options = {
    runScripts: "dangerously",
    resources: "usable",
  };
  const dom = await JSDOM.fromFile("./src/index.html", options);

  await new Promise((resolve) =>
    dom.window.document.addEventListener("load", resolve)
  );

  // allow to use screen of RTL
  document.body.innerHTML = dom.window.document.body.innerHTML;

  const container = dom.window.document.body;
  return {
    container,
    ...within(container),
  };
}

test("renders buttons", async () => {
  await render();

  expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "3" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "6" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "7" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "8" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "9" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "·" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "clean" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "negate" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "percent" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "divide" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "multiply" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "subtract" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "sum" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "equal" })).toBeInTheDocument();
});
