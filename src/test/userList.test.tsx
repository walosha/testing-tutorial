// src/test/formInput.test.tsx

import { render, screen, within } from "@testing-library/react";
import UserList from "../components/userList";

function renderUsers() {
    const users = [
        { email: "olawale@yahoo.com", name: "OLawale" },
        { email: "aKinsanmi@gmail.com", name: "AKinsanmi" },
    ];
    render(<UserList users={users} />);

    return users;
}
describe("Table renders items correctly", () => {
    test("renders the correct number of rows", () => {
        renderUsers();
        const userElement = screen.getByTestId("users");
        const rows = within(userElement).getAllByRole("row");
        expect(rows).toHaveLength(2);
    });
 

    test("Renders the cells correctly", () => {
       const users =  renderUsers();
       const userElement = screen.getByTestId("users");
       const rows = within(userElement).getAllByRole("row");
       
       users.forEach((user, index) => {
        const row = rows[index];
        const cells = within(row).getAllByRole("cell");
        expect(cells[0]).toHaveTextContent(user.name);
        expect(cells[1]).toHaveTextContent(user.email);
      });
       
    });
});
