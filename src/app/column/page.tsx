'use client';
import { Flex } from '@mantine/core'
import RecommendedCategories from '@/widgets/RecommendedCategories';
import MyColumns from '@/widgets/MyColumns';

export default function Column() {
  return (
    <Flex direction='column' gap={56} px={160} py={56}>
      <RecommendedCategories />
      <MyColumns />
    </Flex>
  )
}