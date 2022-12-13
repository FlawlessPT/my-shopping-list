/* React and React Native */
import React, { useEffect, useState } from 'react';

/* Styles */
import { CheckboxIcon, ContainerChecked, ContainerUnchecked } from './styles';

/* Types */
import { BaseCheckboxProps } from './types';

interface CheckboxProps extends BaseCheckboxProps {
  initialValue?: boolean;
}

const Checkbox = ({ initialValue, isChecked: isCheck, onChangeValue }: CheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(initialValue || isCheck);

  // this useEffect give checkbox the capability to work without having its state controlled outside the component
  useEffect(() => {
    if (!initialValue) setIsChecked(isCheck);
  }, [initialValue, isCheck]);

  const onChange = () => {
    // if isCheck prop is passed it means that the state should be controlled outside the component
    if (isCheck === undefined) {
      setIsChecked(!isChecked);
    }
    if (onChangeValue) onChangeValue(!isChecked);
  };

  return isChecked ? <CheckBoxChecked onChangeValue={onChange} /> : <CheckBoxUnchecked onChangeValue={onChange} />;
};

interface CheckboxComponentProps {
  onChangeValue: () => void;
}

const CheckBoxChecked = ({ onChangeValue }: CheckboxComponentProps) => {
  return (
    <ContainerChecked onPress={onChangeValue}>
      <CheckboxIcon />
    </ContainerChecked>
  );
};

const CheckBoxUnchecked = ({ onChangeValue }: CheckboxComponentProps) => {
  return <ContainerUnchecked onPress={onChangeValue} />;
};

export default Checkbox;
