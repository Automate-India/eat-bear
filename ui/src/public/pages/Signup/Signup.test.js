import Signup from "../Signup/Signup";
import {screen, render} from "@testing-library/react";
import { Experimental_CssVarsProvider } from "@mui/material";

describe("Signup", () => {
    it("should render first name field", () => {
        render(<Signup />);
        const firstnameNode = screen.getByLabelText("Firstname");

    })

    it("should render last name field", () => {
        render(<Signup />);
        const lastnameNode = screen.getByLabelText("Lastname");
        
    })

    it("should render email field", () => {
        render(<Signup />);
        const emailNode = screen.getByLabelText("Email");
        
    })

    it("should render password field", () => {
        render(<Signup />);
        const passwordNode = screen.getByLabelText("Password");
        
    })

    it("should render singup button", () => {
        render(<Signup />);
        const signupNode = screen.getByRole("button");
        expect(signupNode).toHaveTextContent("Signup");
    })
})