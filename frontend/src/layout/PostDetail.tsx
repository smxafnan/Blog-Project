import { useParams } from "react-router-dom";
import { posts } from "../Data/postData";
import { Container, Stack, Title, Image, Text, } from '@mantine/core';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found.</div>;
  }

    return (
    <Container size="sm" py="xl">
        <Stack align="center" gap="md">
        <Title order={2} ta="center">
            {post.title}
        </Title>

        {post.imageUrl && (
            <Image
            src={post.imageUrl}
            alt={post.title}
            maw={400}
            w="100%"
            radius="md"
            />
        )}

        

        <Text mt="md" ta="center">
            {post.content}
        </Text>
        </Stack>
    </Container>
    );
}

export default PostDetail;