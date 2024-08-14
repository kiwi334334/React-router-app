import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { queryClient } from "../main";
import { usersQueryOptions } from "../queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createRootRoute({
  loader: () => queryClient.ensureQueryData(usersQueryOptions),
  component: () => {
    const query = useSuspenseQuery(usersQueryOptions);
    const users = query.data;
    return (
      <>
        <div
          id="users"
          className="w-[100px] float-left h-screen bg-[#383D3B] border-[#383D3B] border-2"
        >
          <ul>
            <h1 className="bg-[##899A0]">Users</h1>
            <hr className="border-[#383D3B] border-solid border-b-2" />
            {Array.isArray(users) &&
              users.map((user) => (
                <div
                  className="bg-[#1899A0] border-solid border-black"
                  key={user.userId}
                >
                  <a href={`/users/${user.userId}`}>
                    <p>{user.name}</p>
                  </a>
                  <hr className="border-[#383D3B] border-solid border-b-2" />
                </div>
              ))}
          </ul>
        </div>
        <div className="gap-2 w-full ">
          <Link to="/" className="[&.active]:font-bold">
            Go To Home
          </Link>{" "}
          <Link to="/create/user" className="[&.active]:font-bold">
            Create User
            <hr />
          </Link>
          <br />
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});
