'use client';
import { Flex } from '@mantine/core'
import Archivement from '@/widgets/Archivement';
import MealHistory from '@/widgets/MealHistory';
import MainRecord from '@/widgets/MainRecord';

export default function Home() {
  return (
    <>
      <Flex>
        <Archivement />
        <MainRecord />
      </Flex>
      <MealHistory />
    </>
  )
}