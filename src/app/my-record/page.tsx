'use client';
import { Flex } from '@mantine/core'
import RecordCategories from '@/widgets/RecordCategories';
import MyDiaries from '@/widgets/MyDiaries';
import Inter from '@/components/Text/Inter';
import MyExercises from '@/widgets/MyExercises';
import MyBodyRecord from '@/widgets/MyBodyRecord';

export default function MyRecord() {
  return (
    <Flex direction='column' gap={56} px={160} py={56}>
      <RecordCategories />
      <MyBodyRecord />
      <MyExercises />
      <Inter fz={22} fw={400}>MY DIARY</Inter>
      <MyDiaries />
    </Flex>
  )
}