import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import { createStore } from 'effector';
import Input from './input';
import '@scss/form.scss';

const formError = createForm();
formError.$outerErrorsInline = createStore<any>({ test: 'Some error' });
formError.$values = createStore({ test: 'Test value' });

const stories = storiesOf('inputs/input', module).addParameters({
  layout: 'centered',
});

stories
  .add('label example', () => {
    const form = createForm();
    const { controller } = useForm({ form });

    return <Input label="Label example" autoComplete="on" controller={controller({ name: 'test' })} />;
  })
  .add('label empty', () => {
    const form = createForm();
    const { controller } = useForm({ form });

    return <Input label="" autoComplete="off" controller={controller({ name: 'test' })} />;
  })
  .add('placeholder', () => {
    const form = createForm();
    const { controller } = useForm({ form });

    return <Input placeholder="Native placeholder" controller={controller({ name: 'test' })} />;
  })
  .add('placeholder + label', () => {
    const form = createForm();
    const { controller } = useForm({ form });

    return <Input placeholder="Native placeholder" label="Some label" controller={controller({ name: 'test' })} />;
  })
  .add('with error', () => {
    const { controller } = useForm({ form: formError });

    return <Input label="With error" autoComplete="off" controller={controller({ name: 'test' })} />;
  })
  .add('sizes', () => {
    const form = createForm();
    const { controller } = useForm({ form });

    return (
      <div>
        <Input label="Default (md)" autoComplete="off" controller={controller({ name: 'test' })} />
        <br />
        <Input size="sm" label="sm" autoComplete="off" controller={controller({ name: 'test' })} />
        <br />
        <Input size="md" label="md" autoComplete="off" controller={controller({ name: 'test' })} />
        <br />
        <Input size="lg" label="lg" autoComplete="off" controller={controller({ name: 'test' })} />
      </div>
    );
  });
