import { Modal, TextInput, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TagsInput } from '@mantine/core';

interface CreatePostProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (values: { title: string; content: string }) => void;
}

export function CreatePost({ opened, onClose, onSubmit }: CreatePostProps) {
  const form = useForm({
    initialValues: {
      title: '',
      content: ''
    }
  });

  const handleSubmit = (values: { title: string; content: string }) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Create Post" size="lg">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Title"
          placeholder="Post title"
          required
          {...form.getInputProps('title')}
          mb="md"
        />
        <Textarea
          label="Content"
          placeholder="Post content"
          required
          minRows={6}
          {...form.getInputProps('content')}
          mb="md"
        />
        <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" mb="md"/>
        
        <Button type="submit" fullWidth>
          Create Post
        </Button>
      </form>
    </Modal>
  );
}