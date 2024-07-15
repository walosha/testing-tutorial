import { useState } from "react";
import FormInput from "./components/formInput";
import UserList, { User } from "./components/userList";
import './app.css'

function App() {
    const [users, setUserList] = useState<User[]>([]);

    const onUserAdd = (user: User) => {
        setUserList([...users,user]);
    };

    return (
        <div className="m-auto flex items-center flex-col">
            <FormInput  onUserAdd={onUserAdd} />
            <UserList users={users} />
        </div>
    );
}

export default App;
