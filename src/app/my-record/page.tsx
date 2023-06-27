'use client';
import { Flex } from '@mantine/core'
import RecordCategories from '@/widgets/RecordCategories';
import MyDiary from '@/widgets/MyDiary';
import Inter from '@/components/Text/Inter';
import MyExercise from '@/widgets/MyExercise';

export default function Home() {
  return (
    <Flex direction='column' gap={56} px={160} py={56}>
      <RecordCategories />
      <MyExercise />
      <Inter fz={22} fw={400}>MY DIARY</Inter>
      <MyDiary />
    </Flex>
  )
}