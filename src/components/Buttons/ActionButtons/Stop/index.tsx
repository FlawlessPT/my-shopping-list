/* React and React Native */
import React from 'react';

/* Types */
import { ActionButtonProps } from '../types';

/* Styles */
import { StopIcon, StopIconContainer } from './styles';

const StopButton = ({ onPress }: ActionButtonProps): JSX.Element => {
  return (
    <StopIconContainer onPress={onPress}>
      <StopIcon />
    </StopIconContainer>
  );
};

export default StopButton;
