import BlogCard1 from 'components/blog-cards/BlogCard1'
import CategorySectionHeader from 'components/CategorySectionHeader'
import { Container, Grid } from '@mui/material'
import React, { FC } from 'react'

const Section7: FC = () => {
  return (
    <Container sx={{ mb: '4rem' }}>
      <CategorySectionHeader title="Get Ideas from our Blog" />
      <Grid container spacing={3}>
        {blogs.map((blog, index) => (
          <Grid item md={6} xs={12} key={index}>
            <BlogCard1 blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const blogs = [
  {
    url: '#',
    comments: 3,
    createdAt: '24 Feb 2020',
    imgUrl: '/assets/images/products/blog-1.png',
    title: 'Art of Keeping Home Minimal & Organised.',
    description:
      'Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor.',
  },
  {
    url: '#',
    comments: 14,
    createdAt: '12 Jan 2020',
    imgUrl: '/assets/images/products/blog-2.png',
    title: 'The Monthly Guide to Cleaning Your Home',
    description:
      'Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor.',
  },
]

export default Section7
