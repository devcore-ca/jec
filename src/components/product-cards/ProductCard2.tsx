import HoverBox from 'components/HoverBox'
import LazyImage from 'components/LazyImage'
import { H4 } from 'components/Typography'
import Link from 'next/link'
import React from 'react'

export interface ProductCard2Props {
  imgUrl: string
  title: string
  price: number
  productUrl: string
}

const ProductCard2: React.FC<ProductCard2Props> = ({
  imgUrl,
  title,
  price,
  productUrl,
}) => {
  return (
    <Link href={productUrl}>
      <a>
        <HoverBox borderRadius="8px" mb={1}>
          <LazyImage
            src={imgUrl}
            width={0}
            height={0}
            layout="responsive"
            alt={title}
          />
        </HoverBox>
        <H4 fontWeight="600" fontSize="14px" mb={0.5}>
          {title}
        </H4>
        <H4 fontWeight="600" fontSize="14px" color="primary.main">
          ${Math.ceil(price).toLocaleString()}
        </H4>
      </a>
    </Link>
  )
}

export default ProductCard2
