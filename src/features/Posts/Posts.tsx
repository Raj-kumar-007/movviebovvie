import { List, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useLoaderData } from "react-router-dom";
import { FC } from "react";
import { Post } from "./types";

const Posts: FC = () => {
  const posts = useLoaderData() as Post[];

  if (!posts) {
    return <Box>Loading...</Box>;
  }

  return (
    posts && (
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Typography variant="h6"> {post.title}</Typography>
          </ListItem>
        ))}
      </List>
    )
  );
};

export default Posts;
