import React from 'react';
import * as T from '../styles';
import {StyledHeading2} from '../../../userInterfaceKit/styles';
import {CardsContainer} from '../styles';
import {Card} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';

const interfaceCards = () => (
  <CardsContainer>
    <StyledHeading2>Cards</StyledHeading2>
    <hr />
    <Card>Card</Card>
  </CardsContainer>
);

export default interfaceCards;