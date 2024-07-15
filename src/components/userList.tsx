export interface User {
    name: string;
    email: string;
}

const UserList = ({ users }: { users: User[] }) => {
    return (
        <div className="overflow-x-auto max-w-lg">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">Name</th>
                        <th className="px-4 py-2 border-b">Email</th>
                    </tr>
                </thead>
                <tbody data-testid="users">
                    {users.map(({ name, email }, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-b">{name}</td>
                            <td className="px-4 py-2 border-b">{email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
