'use client';
import { Flex } from '@mantine/core'
import Archivement from '@/widgets/Archivement';
import MealHistory from '@/widgets/MealHistory';
import ContainerCard from '@/components/Card/ContainerCard';

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
  return <ContainerCard w={740} h={316}>

  </ContainerCard>
}