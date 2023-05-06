import {fireEvent, render, screen} from "@testing-library/react";
import Input from "../Input/Input";

describe("Input", () => {
    it("should render with the provided value", () => {
        const inputValue = "dummyValue"
        const label = "dummyLabel"
        render(<Input value={inputValue} label={label}/>);

        const inputNode = screen.getByLabelText(label)

        expect(inputNode).toBeEnabled();

        expect(inputNode).toHaveDisplayValue(inputValue);
    });

    it("should call the onChange function with updated input value", () => {
        const inputValue = "dummyValue"
        const label = "dummyLabel"
        const dummyFunc = jest.fn(() => {});

        render(<Input value={inputValue} label={label} onChange={dummyFunc}/>);
        
        const inputNode = screen.getByLabelText(label);
        expect(inputNode).toHaveDisplayValue(inputValue);
        
        const updatedInputValue = "newInputValue";

        fireEvent.change(inputNode, {target: {value: updatedInputValue}});
        expect(dummyFunc.mock.calls).toHaveLength(1);
    });

    it("should be disabled if disabled is true", () => {
        const inputValue = "dummyValue"
        const label = "dummyLabel"
        render(<Input value={inputValue} disabled label={label} />);

        const inputNode = screen.getByLabelText(label);
        expect(inputNode).toBeDisabled();
    })
})