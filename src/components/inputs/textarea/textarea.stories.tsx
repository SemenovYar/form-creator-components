import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import { validateRequired } from '@utils/validate';
import { createEvent } from 'effector';
import Textarea from './textarea';

const formDef = createForm();
const formError = createForm();

const setOuterErrorsInline = createEvent<{ textarea: string }>();
formError.$outerErrorsInline.on(setOuterErrorsInline, (_, values) => values);
setOuterErrorsInline({ textarea: 'Some error' });

const stories = storiesOf('inputs/textarea', module).addParameters({
  layout: 'centered',
});

stories
  .add('default', () => {
    const { controller, handleSubmit } = useForm({ form: formDef });

    return (
      <form onSubmit={handleSubmit} style={{ width: '500px' }}>
        <Textarea
          controller={controller({ name: 'textarea', validate: validateRequired })}
          label="Description"
          minRows={3}
          maxRows={5}
        />
      </form>
    );
  })
  .add('with error', () => {
    const { controller, handleSubmit } = useForm({ form: formError });

    return (
      <form onSubmit={handleSubmit} style={{ width: '500px' }}>
        <Textarea
          controller={controller({ name: 'textarea', validate: validateRequired })}
          label="Description"
          minRows={3}
          maxRows={5}
        />
      </form>
    );
  });
