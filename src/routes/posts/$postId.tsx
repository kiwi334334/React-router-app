import { createFileRoute } from "@tanstack/react-router";
import { postQueryOptions } from "../../queryOptions";
import { queryClient } from "../../main";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/posts/$postId")({
	component: PostComponent,
	loader: ({ params: { postId } }) => {
		return queryClient.ensureQueryData(postQueryOptions(postId));
	},
});

function PostComponent() {
	const postId = Route.useParams().postId;
	const { data: post } = useSuspenseQuery(postQueryOptions(postId));

	return (
		<div>
			Post ID: {postId}
			<br />
			<div>
				<h1 className="text-[40px]">{post.title}</h1>
				<p>{post.body}</p>
			</div>
		</div>
	);
}
