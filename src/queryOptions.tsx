import { queryOptions } from "@tanstack/react-query";
import {
	getPostById,
	getPosts,
	getPostsByUserId,
	getUserById,
	getUsers,
} from "../api/db";

export const postsQueryOptions = queryOptions({
	queryKey: ["posts"],
	queryFn: () => getPosts(),
});

export const postQueryOptions = (postId: string) =>
	queryOptions({
		queryKey: ["post"],
		queryFn: () => getPostById(postId),
	});

export const usersQueryOptions = queryOptions({
	queryKey: ["users"],
	queryFn: () => getUsers(),
});

export const userQueryOptions = (userId: string) =>
	queryOptions({
		queryKey: ["user"],
		queryFn: () => getUserById(userId),
	});

export const postByUserQueryOptions = (userId: string) =>
	queryOptions({
		queryKey: ["userPosts"],
		queryFn: () => getPostsByUserId(userId),
	});
