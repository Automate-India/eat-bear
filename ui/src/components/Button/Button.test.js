import { Experimental_CssVarsProvider } from "@mui/material";
import { internal_processStyles } from "@mui/styled-engine";
import {screen, render} from "@testing-library/react";
import Button from "../Button/Button";

describe("Button", () => {
    it("should render the button with provided text inside the button", () => {
        const buttonText = "Dummy Text"
        render(<Button>{buttonText}</Button>);
        const element = screen.getByRole("button");
        expect(element).toHaveTextContent(buttonText);
        expect(element).tobeEnabled;
    })
})