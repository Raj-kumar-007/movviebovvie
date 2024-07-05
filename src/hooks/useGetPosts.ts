import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getData } from "../utils/axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useGetPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>();

  const loadUser = useCallback(async () => {
    const postsData = await axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then(getData);
    setPosts(postsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return { posts, loading };
};
