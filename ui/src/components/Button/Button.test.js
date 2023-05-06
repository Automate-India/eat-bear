import {screen, render, fireEvent} from "@testing-library/react";
import Button from "../Button/Button";

describe("Button", () => {
    it("should render the button with provided text inside the button", () => {
        const buttonText = "Dummy Text"
        render(<Button>{buttonText}</Button>);
        const element = screen.getByRole("button");
        expect(element).toHaveTextContent(buttonText);
        expect(element).tobeEnabled;
    })

    it("should must call the function passed on clicking the button", async () => {
        const buttonText = "Dummy Text";
        const dummyFunc = jest.fn(() => {});
        render(<Button onClick={dummyFunc}>{buttonText}</Button>);
        const element = screen.getByRole("button");
        fireEvent.click(element);
        expect(dummyFunc.mock.calls).toHaveLength(1);
    })
})