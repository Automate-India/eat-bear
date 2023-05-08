import { screen, render, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Signup from "../Signup/Signup";

describe("Signup", () => {

    describe("first name field", () => {
        it("should render first name field", async () => {
            render(<Signup />);
            const firstnameNode = screen.getByLabelText("Firstname");
            expect(firstnameNode).tobeEnabled;
        });

        it("should show error if user enters only 2 letters or chars", async () => {
            const user = userEvent.setup();
            render(<Signup />);
            const firstnameNode = screen.getByLabelText("Firstname");
            const signupNode = screen.getByRole("heading");
            expect(signupNode).toHaveTextContent("Signup");
            await act(async () => await user.type(firstnameNode, "sa"));
            await act(async () => await user.click(signupNode));
            const paragraphNode = screen.getByText("Firstname must be atleast 3 chars!");
            expect(paragraphNode).toHaveTextContent("Firstname must be atleast 3 chars!")
        });

        it("should show error if user enters more that 15 chars", async () => {
            const user = userEvent.setup();
            render(<Signup />);
            const firstnameNode = screen.getByLabelText("Firstname");
            const signupNode = screen.getByRole("heading");
            expect(signupNode).toHaveTextContent("Signup");
            await act(async () => await user.type(firstnameNode, "sanjuisoneof the greatest person in the world!"));
            await act(async () => await user.click(signupNode));
            const paragraphNode = screen.getByText("Must be 15 characters or less");
            expect(paragraphNode).toHaveTextContent("Must be 15 characters or less");
            const signupButtonNode = screen.getByRole("button");
            expect(signupButtonNode).toBeDisabled();
        })

    });

    describe("Lastname", () => {
        it("should render last name field", () => {
            render(<Signup />);
            const lastnameNode = screen.getByLabelText("Lastname");
            expect(lastnameNode).tobeEnabled;
        });

        it("should show error if user enters only 2 letters or chars", async () => {
            const user = userEvent.setup();
            render(<Signup />);
            const lastnameNode = screen.getByLabelText("Lastname");
            const signupNode = screen.getByRole("heading");
            expect(signupNode).toHaveTextContent("Signup");
            await act(async () => await user.type(lastnameNode, "sa"));
            await act(async () => await user.click(signupNode));
            const paragraphNode = screen.getByText("Lastname must be atleast 3 chars!");
            expect(paragraphNode).toHaveTextContent("Lastname must be atleast 3 chars!");
            const signupButtonNode = screen.getByRole("button");
            expect(signupButtonNode).toBeDisabled();
        });

        it("should show error if user enters more that 15 letters or chars", async () => {
            const user = userEvent.setup();
            render(<Signup />);
            const lastnameNode = screen.getByLabelText("Lastname");
            const signupNode = screen.getByRole("heading");
            expect(signupNode).toHaveTextContent("Signup");
            await act(async () => await user.type(lastnameNode, "Thakkalapally persons are great in the world"));
            await act(async () => await user.click(signupNode));
            const paragraphNode = screen.getByText("Must be 15 characters or less");
            expect(paragraphNode).toHaveTextContent("Must be 15 characters or less");
            const signupButtonNode = screen.getByRole("button");
            expect(signupButtonNode).toBeDisabled();
        });
    });

    describe("Email", () => {
        it("should render email field", () => {
            render(<Signup />);
            const emailNode = screen.getByLabelText("Email");
            expect(emailNode).tobeEnabled;
        });

        it("should raise exception if ")

    })


    it("should render password field", () => {
        render(<Signup />);
        const passwordNode = screen.getByLabelText("Password");
        expect(passwordNode).tobeEnabled;
    });

    it("should render singup button", () => {
        render(<Signup />);
        const signupNode = screen.getByRole("button");
        expect(signupNode).toHaveTextContent("Signup")
    });
})