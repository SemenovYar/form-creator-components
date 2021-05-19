import React from 'react';
import Input from '@components/inputs/input/input';

type PublicProps = {
  type?: 'text' | 'password' | 'number';
};

type Props = PublicProps & {
  controller: any;
  formItemName: any;
};

const TestArrayFieldComponent: React.FC<Props> = ({ controller, formItemName, type }) => {
  return (
    <>
      <Input
        label="First Name"
        type={type}
        controller={formItemName ? controller({ name: `${formItemName}.firstName` }) : controller}
      />
    </>
  );
};

export default React.memo(TestArrayFieldComponent);
