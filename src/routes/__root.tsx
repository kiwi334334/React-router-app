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
				<div id="users" className="fixed w-[5%] h-screen bg-[#383D3B] border-[#383D3B] border-2">
					<ul>
						<h1 className="bg-[##899A0]">Users</h1>
						<hr className="border-[#383D3B] border-solid border-b-2"/>
						{Array.isArray(users) &&
							users.map((user) => (
								<div
									className="bg-[#1899A0] border-solid border-black"
									key={user.userId}
								>
									<a href={`/users/${user.userId}`}>
										<p>{user.name}</p>
									</a>
									<hr className="border-[#383D3B] border-solid border-b-2"/>

								</div>
							))}
					</ul>
				</div>
				<div className="p-2 w-[95%] right-0 z-1 fixed z-100">
					<Link to="/" className="[&.active]:font-bold">
						Go To Home
						<hr />
					</Link>{" "}
					<br />
					<Outlet />
				</div>

				<TanStackRouterDevtools />
			</>
		);
	},
});
