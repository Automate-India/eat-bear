import { Experimental_CssVarsProvider } from "@mui/material";
import { internal_processStyles } from "@mui/styled-engine";
import {screen, render} from "@testing-library/react";
import Button from "../Button/Button";

describe("Button", () => {
    it("should render the button", () => {
        render(<Button />);
        const element = screen.getByText("Button");
        expect(element).toHaveTextContent("Button");
    })
})