import React, { useState } from 'react';
import { InnerSection } from '../../settings/themed';
import { Button, Form, Input, Label } from '../../customs';
import { useMainDispatch } from '../../../redux/hooks';
import { toggleNotification } from '../controller';

export const ToggleNotification = (): React.JSX.Element => {
  const dispatch = useMainDispatch();
  const [text, setText] = useState<string>('');

  return (
    <InnerSection>
      <Form onSubmit={(e): void => toggleNotification(e, text, dispatch)} data-cy="debug-form-defaultNotification">
        <Label>Toggle notification</Label>
        <Input type="text" placeholder="Text" onChange={(e): void => setText(e.target.value)} required />
        <Button type="submit" className="mainButton">
          Send
        </Button>
      </Form>
    </InnerSection>
  );
};

