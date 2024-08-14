import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
	component: Index,
	loader: () => queryClient.ensureQueryData(postsQueryOptions),
});

import { queryClient } from "../main";
import { postsQueryOptions } from "../queryOptions";

function Index() {
	const query = useSuspenseQuery(postsQueryOptions);
	const posts = query.data;
	return (
		<div>
			<ul>
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
			</ul>
		</div>
	);
}
