import Signup from "../Signup/Signup";
import {screen, render, fireEvent} from "@testing-library/react";

describe("Signup", () => {
    it("should render first name field", () => {
        render(<Signup />);
        const firstnameNode = screen.getByLabelText("Firstname");
        // fireEvent.onChange(firstnameNode, {target: {value}})

    })

    it("should render last name field", () => {
        render(<Signup />);
        const lastnameNode = screen.getByLabelText("Lastname");
        
    })

    it("should render email field", () => {
        render(<Signup />);
        const emailNode = screen.getByLabelText("Email");
        
    });

    it("should render password field", () => {
        render(<Signup />);
        const passwordNode = screen.getByLabelText("Password");
        
    });

    it("should render singup button", () => {
        render(<Signup />);
        const signupNode = screen.getByRole("button");
        expect(signupNode).toHaveTextContent("Signup");
    })
})