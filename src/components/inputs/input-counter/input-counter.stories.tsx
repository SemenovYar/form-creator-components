import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import { createEvent } from 'effector';
import InputCounter from './input-counter';
import '@scss/form.scss';

const stories = storiesOf('inputs/input-counter', module).addParameters({
  layout: 'centered',
});

const form = createForm();

const setValues = createEvent<{ count: any }>();
form.$values.on(setValues, (_, values) => values);
setValues({
  count: 1,
});

stories.add('default', () => {
  const { controller } = useForm({
    form,
  });

  return (
    <div>
      <InputCounter controller={controller({ name: 'count' })} />
    </div>
  );
});
