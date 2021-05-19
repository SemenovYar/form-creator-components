import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import DropzoneAvatar from './dropzone-avatar';
import '@scss/form.scss';

const stories = storiesOf('inputs/dropzone-avatar', module).addParameters({
  layout: 'centered',
});

const form = createForm();

stories.add('default', () => {
  const { controller } = useForm({ form });

  return <DropzoneAvatar controller={controller({ name: 'image' })} />;
});
