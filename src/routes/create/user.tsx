import { createFileRoute, Link } from "@tanstack/react-router";
import { createUser } from "../../../api/db";
import { useState } from "react";

export const Route = createFileRoute("/create/user")({
  component: () => {
    const [name, changeName] = useState("");
    function create() {
      createUser(name);
    }
    return (
      <div>
        <label htmlFor="nameInput">Name Of User Goes Here</label>
        <input
          onChange={() => changeName(name)}
          type="text"
          name="nameInput"
          id="nameInput"
        />
        <Link to="/">
          <button onClick={create}>Click Here To Create your user</button>
        </Link>
      </div>
    );
  },
});
