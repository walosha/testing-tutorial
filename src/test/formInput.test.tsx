// src/test/formInput.test.tsx

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import FormInput from "../components/formInput";

describe("Form Input render correctly", () => {
    it("Form has a email and name input elements", () => {
        render(<FormInput onUserAdd={() => {}} />);
        const inputs = screen.getAllByRole("textbox");
        const submitButton = screen.getByRole("button");

        expect(inputs).toHaveLength(2);
        expect(submitButton).toBeInTheDocument();
    });

    it(" user name and email", () => {
        const onUserAdd =  vi.fn()
        render(<FormInput onUserAdd={onUserAdd} />);
        const nameInput = screen.getByRole("textbox", { name: /Name/i });
        const emailInput = screen.getByRole("textbox", { name: /Email/i });
        const submitButton = screen.getByRole("button");

        user.click(nameInput)
        user.keyboard('Segun Adewale')
        user.click(emailInput)
        user.keyboard('segun@gmail.com')
        user.click(submitButton)

        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
    });
});
