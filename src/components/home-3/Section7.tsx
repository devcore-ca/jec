import FlexBox from 'components/FlexBox'
import AlarmClock from 'components/icons/AlarmClock'
import MoneyGuarantee from 'components/icons/MoneyGurantee'
import OnlineSupport from 'components/icons/OnlineSupport'
import Payment from 'components/icons/Payment'
import Truck from 'components/icons/Truck'
import { H3, Span } from 'components/Typography'
import { Container, styled } from '@mui/material'
import React, { FC } from 'react'

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '8px',
  flexWrap: 'wrap',
  [theme.breakpoints.between('sm', 'lg')]: {
    '&': {
      justifyContent: 'space-evenly',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '&': {
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
}))

const Section7: FC = () => {
  return (
    <Container sx={{ mb: '4rem' }}>
      <StyledFlexBox>
        {serviceList.map((item, ind) => (
          <FlexBox key={ind} p="1rem">
            <item.icon
              fontSize="inherit"
              color="inherit"
              sx={{
                color: 'grey.900',
                fontSize: '40px',
                mr: 1,
              }}
            />
            <div>
              <H3 color="grey.900" lineHeight={1.3}>
                {item.title}
              </H3>
              <Span color="grey.600">{item.subtitle}</Span>
            </div>
          </FlexBox>
        ))}
      </StyledFlexBox>
    </Container>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    subtitle: 'Start from $10',
  },
  {
    icon: MoneyGuarantee,
    title: 'Money Guarantee',
    subtitle: '7 Days Back',
  },
  {
    icon: AlarmClock,
    title: '365 Days',
    subtitle: 'For free return',
  },
  {
    icon: Payment,
    title: 'Payment',
    subtitle: 'Secure system',
  },

  {
    icon: OnlineSupport,
    title: 'Online Support',
    subtitle: '24/7 daily',
  },
]

export default Section7
