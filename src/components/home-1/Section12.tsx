import BazarCard from 'components/BazarCard'
import BazarIconButton from 'components/BazarIconButton'
import CreditCardVerified from 'components/icons/CreditCardVerified'
import CustomerService from 'components/icons/CustomerService'
import Shield from 'components/icons/Shield'
import Truck from 'components/icons/Truck'
import { Container, Grid } from '@mui/material'
import React, { FC } from 'react'
import { H4, Span } from '../Typography'

const Section12: FC = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <Grid container spacing={3}>
        {serviceList.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <BazarCard
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '3rem',
                height: '100%',
                borderRadius: '8px',
              }}
              hoverEffect
            >
              <BazarIconButton
                fontSize="1.75rem"
                height="64px"
                width="64px"
                bgcolor="grey.200"
              >
                <item.icon fontSize="inherit" />
              </BazarIconButton>
              <H4 mt={2.5} mb={1.25} textAlign="center">
                {item.title}
              </H4>
              <Span textAlign="center" color="grey.600">
                We offer competitive prices on our 100 million plus product any
                range.
              </Span>
            </BazarCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Worldwide Delivery',
  },
  {
    icon: CreditCardVerified,
    title: 'Safe Payment',
  },
  {
    icon: Shield,
    title: 'Shop With Confidence',
  },
  {
    icon: CustomerService,
    title: '24/7 Support',
  },
]

export default Section12
