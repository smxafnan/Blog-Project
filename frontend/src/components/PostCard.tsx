import { Card, Image, Text, Badge, Group } from '@mantine/core';

// Define the type for your post data (optional, but good practice with TypeScript)
interface PostProps {
  id: string;
  title: string;
  tags: string[];
  imageUrl?: string; // Image URL is optional
  // content?: string; // We're explicitly NOT using content, so we don't need to define it here
}

function PostCard({ id, title, tags, imageUrl }: PostProps) {
  // Define a default image if imageUrl is not provided
  const defaultImageUrl = 'https://via.placeholder.com/300x160?text=No+Image'; // A simple placeholder

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      w={370} // Fixed width
      h={250} // Adjusted height to fit content without scrollbar for now
      key={id} // Important for lists of components in React
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} // Flexbox for better content distribution
    >
      <Card.Section>
        <Image
          src={imageUrl || defaultImageUrl} // Use provided image or default
          height={160}
          alt={title} // Use title as alt text for accessibility
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Group gap={4}> {/* Use Group for badges to control spacing */}
          {tags.map((tag) => (
            <Badge key={tag} color="blue" variant="light">
              {tag}
            </Badge>
          ))}
        </Group>
      </Group>

      {/* Explicitly NOT showing content here */}
      {/*
      <Text size="sm" c="dimmed">
        This is where content would go if we decided to display it.
        We're intentionally omitting it as per your requirement.
      </Text>
      */}
      {/* You could add a short description if desired, perhaps derived from the title or a new field */}

    </Card>
  );
}

export default PostCard;