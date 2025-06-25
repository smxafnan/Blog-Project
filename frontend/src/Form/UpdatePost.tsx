import { Modal, TextInput, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TagsInput } from '@mantine/core';

interface EditPostProps {
  opened: boolean;
  onClose: () => void;
  initialValues: { title: string; content: string; tags: string[] };
  onSubmit: (values: { title: string; content: string; tags: string[]}) => void;
}

export function EditPost({ opened, onClose, initialValues, onSubmit }: EditPostProps) {
  const form = useForm({
    initialValues
  });

  const handleSubmit = (values: { title: string; content: string; tags: string[]}) => {
    onSubmit(values);
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Edit Post" size="lg">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Title"
          required
          {...form.getInputProps('title')}
          mb="md"
        />
        <Textarea
          label="Content"
          required
          minRows={6}
          {...form.getInputProps('content')}
          mb="md"
        />
        <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" mb="md"/>
        <Button type="submit" fullWidth>
          Update Post
        </Button>
      </form>
    </Modal>
  );
}