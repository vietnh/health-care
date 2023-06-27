import ScrollArea from "@/components/ScrollArea";
import Inter from "@/components/Text/Inter";
import { colors } from "@/theme";
import { Card, Divider, Flex, Group, SimpleGrid, Text } from "@mantine/core";

const useGetExercises = () => {
  return new Array(16).fill({
    date: '2021.05.21',
    time: '23:25',
    contents: [
      '私の日記の記録が一部表示されます。',
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    ]
  })
}

const MyExercise: React.FC = () => {
  const exercises = useGetExercises();

  return (
    <Card bg={colors.dark[500]} w={960} h={264} radius={0} c='white' px={24} py={16}>
      <Flex align='center' h={36}>
        <Inter fz={15} w={96} sx={{ lineHeight: '18px' }}>BODY RECORD</Inter>
        <Inter fz={22} sx={{ lineHeight: '27px' }}>2021.05.21</Inter>
      </Flex>

      <ScrollArea h='calc(100% - 36px)'>
        <SimpleGrid cols={2} spacing={40} verticalSpacing={8}>
          {exercises.map((exercise, index) => (
            <Flex direction='column' h={40} key={index}>
              <Group align='flex-start' spacing={3}>
                <Dot />
                <Flex direction='column' sx={{ flexGrow: 1 }}>
                  <Text fz={15} sx={{ lineHeight: '22px' }}>家事全般（立位・軽い）</Text>
                  <Inter c={colors.primary[300]} fz={15} sx={{ lineHeight: '18px' }}>26kcal</Inter>
                </Flex>
                <Inter c={colors.primary[300]} fz={18} sx={{ lineHeight: '22px' }}>10 min</Inter>
              </Group>
              <Divider color={colors.gray[400]} />
            </Flex>
          ))}
        </SimpleGrid>
      </ScrollArea>
    </Card>

  );
}

const Dot: React.FC = () => {
  return <Text fz={10} w={13} sx={{ lineHeight: 'inherit' }}>●</Text>
}

const ExerciseRecord: React.FC = () => {
  return (
    <Flex direction='column'>
      <Group align='flex-start' spacing={3}>
        <Dot />
        <Flex direction='column' sx={{ flexGrow: 1 }}>
          <Text fz={15}>家事全般（立位・軽い）</Text>
          <Inter c={colors.primary[300]} fz={15}>26kcal</Inter>
        </Flex>
        <Inter c={colors.primary[300]} fz={18}>10 min</Inter>
      </Group>
      <Divider />
    </Flex>
  )
}

export default MyExercise;