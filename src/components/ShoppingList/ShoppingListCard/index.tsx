/* React and React Native */
import React from 'react';

/* Components */
import Checkbox from '~/components/Checkbox';
import { Product } from '~/models/Product';

/* Types */
import { BaseCheckboxProps } from '../../Checkbox/types';

/* Components */
import Label from '../../Label';

/* Styles */
import { Container, ProductContainer } from './styles';

/* Helpers */
import { capitalizeFirstLetter } from '~/helpers/stringFormatters';

type ListItemProps = BaseCheckboxProps & Product;

const ShoppingListCard = ({ name, quantity, market, isChecked, onChangeValue }: ListItemProps): JSX.Element => {
  const withQuantity = quantity ? `(${quantity}) ` : '';

  return (
    <Container>
      <ProductContainer>
        <Label type="h4">{`${withQuantity}${capitalizeFirstLetter(name)}`}</Label>
        {market && <Label type="footnote">{market}</Label>}
      </ProductContainer>
      <Checkbox isChecked={isChecked} onChangeValue={onChangeValue} />
    </Container>
  );
};

export default ShoppingListCard;
