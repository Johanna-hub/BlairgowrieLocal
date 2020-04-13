import React from 'react';
import styled from 'styled-components';

import { isLast } from '../utils';

import { Box, Text, Image } from '../atoms';
import { Row } from '../molecules';



const PlaceImage = ({ source, ...props }) => (
  <Image source={source} {...props} />
);

const CategoryName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  color: #878787;
`;

const CollectionMethod = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

const PlaceName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;

const TagText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
`;

const Tag = ({ type, ...props }) => (
  <Box bg="black" py={1} px={12} borderRadius={4} {...props}>
    <TagText color="#fff">
      {type}
    </TagText>
  </Box>
)

const PlaceInfo = ({ name, category, tags }) => (
  <Box width="100%">
    <Row width="100%" justifyContent="space-between" mt={2} mb={1}>
      <CategoryName>
        {(category || '').toUpperCase()}
      </CategoryName>
      <CollectionMethod>
        {(category || '').toUpperCase()}
      </CollectionMethod>
    </Row>
    <PlaceName mb={2}>
      {name}
    </PlaceName>
    {tags && (
      <Row flexWrap="wrap">
        {tags.map((tag, i) => (
          <Tag key={i} type={tag} mr={!isLast(i, tags.length) ? 2 : 0} />
        ))}
      </Row>
    )}
  </Box>
);

const PlaceItemContainer = ({ children, ...props }) => (
  <Box {...props}>
    {children}
  </Box>
);
const PlaceItem = ({ children, place: { name, category, source, tags }, ...props }) => (
  <PlaceItemContainer {...props}>
    <PlaceImage flex={1} source={source} />
    <PlaceInfo name={name} category={category} tags={tags} />
  </PlaceItemContainer>
);

PlaceItem.defaultProps = {
  place: {
    name: 'Ashby\'s Shop',
    category: 'groceries',
    source: 'https://media-cdn.tripadvisor.com/media/photo-s/15/7d/ca/8a/bakery.jpg',
    tags: ['Fruit & Veg', 'Bread'],
  },
};

export default PlaceItem;