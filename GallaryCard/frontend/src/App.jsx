import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Gallery Card</h1>

      <p>Users: {users.length}</p>

      <div className="container">
        {users.map((user) => (
          <Card key={user.id} id={user.id} img={user.img} name={user.name} />
        ))}
      </div>
    </>
  );
}

export default App;
