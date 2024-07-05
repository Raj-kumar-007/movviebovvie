import { List, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useLoaderData } from "react-router-dom";
import { Post } from "./types";
import { FC } from "react";

const Posts: FC = () => {
  const posts = useLoaderData() as Post[];

  let content = <Typography variant="h6"> No Posts found </Typography>;

  if (posts) {
    content = (
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Typography variant="h6"> {post.title}</Typography>
          </ListItem>
        ))}
      </List>
    );
  }

  return <Box>{content}</Box>;
};

export default Posts;
