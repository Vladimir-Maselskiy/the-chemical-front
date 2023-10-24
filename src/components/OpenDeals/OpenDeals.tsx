import { getOpenDeals } from '@/utils/api';
import React, { useState, useEffect } from 'react';
import { Box } from '../Box/Box';
import {
  StyledItem,
  StyledItemDescription,
  StyledItemDescriptionBox,
  StyledItemDescriptionTitle,
  StyledList,
  StyledTitle,
} from './OpenDeals.styled';
import { TDeals } from '@/interfaces/interfaces';

export const OpenDeals = () => {
  const [deals, setDeals] = useState<TDeals[]>([]);

  useEffect(() => {
    getOpenDeals().then(deals => setDeals(deals));
  }, []);

  return (
    <Box py={50} px={80}>
      <StyledTitle>Open Deals</StyledTitle>
      <StyledList>
        {deals?.map(deal => (
          <StyledItem key={deal._id} img={deal.image}>
            <StyledItemDescription>
              <StyledItemDescriptionBox>
                <StyledItemDescriptionTitle>
                  {deal.name}
                </StyledItemDescriptionTitle>
                <StyledItemDescriptionBox>
                  <p>{deal.price} Dhs</p>
                  <p>Ticket - {deal.ticket} Dhs</p>
                </StyledItemDescriptionBox>
              </StyledItemDescriptionBox>
              <StyledItemDescriptionBox>
                <p>Yield {deal.yield}%</p>
                <p>Days left {deal.daysLeft}</p>
              </StyledItemDescriptionBox>
              <StyledItemDescriptionBox>
                <p>Sold {deal.sold}%</p>
              </StyledItemDescriptionBox>
            </StyledItemDescription>
          </StyledItem>
        ))}
      </StyledList>
    </Box>
  );
};
