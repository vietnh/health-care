'use client';
import { Box, Flex } from '@mantine/core'
import { colors } from '@/theme';
import Archivement from '@/widgets/Archivement';
import MealHistory from '@/widgets/MealHistory';

export default function Home() {
  return (
    <>
      <Flex>
        <Archivement />
        <BodyGraph />
      </Flex>
      <MealHistory />
    </>
  )
}

const BodyGraph = () => {
  return <Box sx={{
    backgroundColor: colors.dark[600]
  }}>
  </Box>
}