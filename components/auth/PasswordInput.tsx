import { AnyFieldApi } from '@tanstack/react-form';
import { useState } from 'react';
import { Pressable, TextInputProps } from 'react-native';
import { Input } from '../fields/Input';
import { Icon } from '../Icon';

interface Props extends TextInputProps {
  field: AnyFieldApi;
}

export const PasswordInput = ({ field, ...props }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      field={field}
      secureTextEntry={!visible}
      rightButton={
        <Pressable onPress={() => setVisible((prev) => !prev)}>
          <Icon id={visible ? 'visible' : 'hidden'} />
        </Pressable>
      }
      {...props}
    />
  );
};
