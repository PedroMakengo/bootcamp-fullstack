interface Post {
  id: number;
  title: string;
  description: string;
}

type PostPreview = Omit<Post, "id" | "title">;

let post: PostPreview;
