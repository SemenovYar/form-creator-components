import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import Slider from './slider';

const stories = storiesOf('inputs/slider', module).addParameters({
  layout: 'centered',
});

const form = createForm();

stories.add('default', () => {
  const { controller } = useForm({ form });
  const values = useStore(form.$values);

  return (
    <div style={{ width: '514px' }}>
      <Slider controller={controller({ name: 'slider' })} />
      <pre>{JSON.stringify(values, null, '  ')}</pre>
    </div>
  );
});
