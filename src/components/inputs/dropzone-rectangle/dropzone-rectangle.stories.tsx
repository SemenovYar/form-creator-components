import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import DropzoneRectangle from './dropzone-rectangle';
import '@scss/form.scss';

const stories = storiesOf('inputs/dropzone-rectangle', module).addParameters({
  layout: 'centered',
});

const form = createForm();

stories.add('default', () => {
  const { controller } = useForm({ form });

  return <DropzoneRectangle controller={controller({ name: 'image' })} type="brands" />;
});
