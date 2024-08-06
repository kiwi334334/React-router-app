import { LocalStoragePreset } from "lowdb/browser";
const db = LocalStoragePreset("db.json", {
	posts: [
		{ title: "Hello World!", body: "Lorem Ipsum", postId: "1", authorId: "1" },
		{
			title: "Another Post",
			body: "Hello Again",
			postId: "2",
			authorId: "1",
		},
	],
	users: [
		{
			name: "Admin",
			userId: "1",
		},
		{
			name: "Totally Real User",
			userId: "2"
		}
	],
});

export const getPosts = () => {
	return db.data.posts;
};

export const getPostsByUserId = (userId: string) => {
	return db.data.posts.filter((post) => post.authorId === userId);
};

export const getPostById = (postId: string) => {
	return db.data.posts[Number.parseInt(postId) - 1];
};

export const getUsers = () => {
	return db.data.users;
};

export const getUserById = (userId: string) => {
	return db.data.users[Number.parseInt(userId) - 1];
};
