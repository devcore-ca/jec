import FlexBox from 'components/FlexBox'
import LazyImage from 'components/LazyImage'
import { H3 } from 'components/Typography'
import Visibility from '@mui/icons-material/Visibility'
import { Card, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import Link from 'next/link'
import React, { FC, Fragment } from 'react'

// component props interface
export interface PageCardProps {
  title: string
  imgUrl: string
  previewUrl: string
  disabled?: boolean
}

// styled components
const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '0.5rem',
  position: 'relative',
  cursor: 'pointer',
  '& .overlay': {
    transition: '0.3s ease-in-out',
  },
  '&:hover': {
    '.overlay': {
      opacity: 1,
    },
  },
}))

const StyledFlex = styled(FlexBox)(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: '8px',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0, 0.54)',
}))

const PageCard: FC<PageCardProps> = ({ title, imgUrl, previewUrl, disabled }) => {
  return (
    <Fragment>
      <Wrapper mb={3} p="6% 6% 0px" overflow="hidden">
        <Card elevation={3}>
          <LazyImage
            width={470}
            height={397}
            src={imgUrl}
            objectFit="cover"
            layout="responsive"
            objectPosition="top center"
          />
        </Card>

        {!disabled && (
          <Link href={previewUrl}>
            <a>
              <StyledFlex className="overlay">
                <IconButton
                  sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'white' } }}
                >
                  <Visibility fontSize="small" />
                </IconButton>
              </StyledFlex>
            </a>
          </Link>
        )}
      </Wrapper>

      <H3 textAlign="center" lineHeight="1" fontSize="14px">
        {title}
      </H3>
    </Fragment>
  )
}

export default PageCard
