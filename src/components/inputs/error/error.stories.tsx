import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import { validateRequired } from '@utils/validate';
import { Input, Button } from '@components/inputs';
import Error from './error';
import '@scss/form.scss';

const stories = storiesOf('inputs/error', module).addParameters({
  layout: 'centered',
});

const form = createForm();

stories.add('default', () => {
  const { controller, handleSubmit } = useForm({ form });

  return (
    <div>
      <h2>Form:</h2>
      <form onSubmit={handleSubmit}>
        <Input
          className="mt-2"
          label="firstName"
          controller={controller({ name: 'firstName', validate: validateRequired })}
        />
        <Input
          className="mt-2"
          label="lastName"
          controller={controller({ name: 'lastName', validate: validateRequired })}
        />
        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </form>
      <h2>Place for errors:</h2>
      <div className="mt-4">
        <div>
          firstName:
          <br />
          <Error form={form} name="firstName" />
        </div>
        <div className="mt-2">
          lastName:
          <br />
          <Error form={form} name="lastName" />
        </div>
      </div>
    </div>
  );
});
