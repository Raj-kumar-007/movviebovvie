import axios from "axios";
import { getData } from "../../utils/axios";
import { Post } from "../../features/Posts/types";

export const postLoader = async () => {
  const postData = await axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then(getData);

  if (!postData) {
    throw new Error("Could not get Data ");
  }

  return postData;
};
