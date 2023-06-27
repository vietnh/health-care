'use client';
import { Flex } from '@mantine/core'
import RecommendedCategories from '@/widgets/RecommendedCategories';
import ColumnList from '@/widgets/ColumnList';

export default function Column() {
  return (
    <Flex direction='column' gap={56} px={160} py={56}>
      <RecommendedCategories />
      <ColumnList />
    </Flex>
  )
}