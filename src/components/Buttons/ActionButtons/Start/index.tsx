/* React and React Native */
import React from 'react';

/* Types */
import { ActionButtonProps } from '../types';

/* Styles */
import { StartIconContainer, StartIcon } from './styles';

const StartButton = ({ onPress }: ActionButtonProps): JSX.Element => {
  return (
    <StartIconContainer onPress={onPress}>
      <StartIcon />
    </StartIconContainer>
  );
};

export default StartButton;
