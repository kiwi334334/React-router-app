import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "../../main";
import { userQueryOptions, postByUserQueryOptions } from "../../queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/users/$userId")({
	loader: ({ params: { userId } }) => {
		queryClient.ensureQueryData(userQueryOptions(userId));
		queryClient.ensureQueryData(postByUserQueryOptions(userId));
	},
	component: component,
});
import "../../main.css";

function component() {
	const userId = Route.useParams().userId;
	const { data: posts } = useSuspenseQuery(postByUserQueryOptions(userId));

	return (
		<div>
			{Array.isArray(posts) &&
				posts.map((post) => (
					<>
						<div
							className="bg-zinc-200 border-black border-solid border-2"
							key={post.postId}
						>
							<a href={`/posts/${post.postId}`} className="text-black">
								<h1>{post.title}</h1>
								<p>{post.body}</p>
							</a>
						</div>
						{/* biome-ignore lint/correctness/useJsxKeyInIterable: <explanation> */}
						<br />
					</>
				))}
		</div>
	);
}
