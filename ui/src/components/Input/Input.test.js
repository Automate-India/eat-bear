import {render, screen} from "@testing-library/react";
import Input from "../Input/Input";

describe("Input", () => {
    it("should render with the provided value", () => {
        const inputValue = "dummyValue"
        const label = "dummyLabel"
        render(<Input value={inputValue} label={label}/>);

        const inputNode = screen.getByLabelText(label)

        expect(inputNode).toBeEnabled;

        expect(inputNode).toHaveDisplayValue(inputValue);
    })
})