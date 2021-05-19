import React from 'react';
import { storiesOf } from '@storybook/react';
import { createForm, useForm } from 'effector-react-form';
import { useStore } from 'effector-react';
import { Input } from '@components/inputs';
import { createEvent } from 'effector';
import InputPhone from './input-phone';

const form = createForm();
const formError = createForm();

const setFormValues = createEvent<{ name: string }>();
const setFormErrorValues = createEvent<{ name: string; phone: string }>();
const setOuterErrorsInline = createEvent<{ name: string; phone: string }>();

form.$values.on(setFormValues, (_, values) => values);
setFormValues({ name: 'test' });
formError.$values.on(setFormErrorValues, (_, values) => values);
setFormErrorValues({ name: 'test', phone: '79990009922' });
formError.$outerErrorsInline.on(setOuterErrorsInline, (_, values) => values);
setOuterErrorsInline({ phone: 'Field is required', name: 'Field is required' });

const stories = storiesOf('inputs/input-phone', module).addParameters({
  layout: 'centered',
});

stories
  .add('default', () => {
    const { controller } = useForm({ form });
    const values = useStore(form.$values);

    return (
      <div>
        <Input controller={controller({ name: 'name' })} label="Name" />
        <br />
        <InputPhone controller={controller({ name: 'phone' })} />
        <pre>{JSON.stringify(values, null, '  ')}</pre>
      </div>
    );
  })
  .add('sizes', () => {
    const { controller } = useForm({ form });
    const values = useStore(form.$values);

    return (
      <div>
        <h3>sm</h3>
        <br />
        <br />
        <div>
          <Input size="sm" controller={controller({ name: 'name' })} label="Name" />
          <br />
          <InputPhone size="sm" controller={controller({ name: 'phone' })} />
          <pre>{JSON.stringify(values, null, '  ')}</pre>
        </div>
        <br />
        <h3>md (default)</h3>
        <br />
        <br />
        <div>
          <Input size="md" controller={controller({ name: 'name' })} label="Name" />
          <br />
          <InputPhone size="md" controller={controller({ name: 'phone' })} />
          <pre>{JSON.stringify(values, null, '  ')}</pre>
        </div>
      </div>
    );
  })
  .add('with error', () => {
    const { controller } = useForm({ form: formError });
    const values = useStore(formError.$values);

    return (
      <div>
        <Input controller={controller({ name: 'name' })} label="Name" />
        <br />
        <InputPhone controller={controller({ name: 'phone' })} />
        <pre>{JSON.stringify(values, null, '  ')}</pre>
      </div>
    );
  });
