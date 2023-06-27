import { Exercise } from "@/app/api/exercises/route";
import ContainerCard from "@/components/Card/ContainerCard";
import ScrollArea from "@/components/ScrollArea";
import Inter from "@/components/Text/Inter";
import useFetch from "@/hooks/useFetch";
import { colors } from "@/theme";
import { formatDate } from "@/utils/date";
import { formatDuration } from "@/utils/time";
import { Divider, Flex, Group, SimpleGrid, Text } from "@mantine/core";
import { forwardRef } from "react";

const ExerciseList = forwardRef<HTMLDivElement>((_, ref) => {
  const exercises = useFetch<Exercise[]>('/api/exercises', []);

  return (
    <ContainerCard
      w={960}
      h={264}
      px={24}
      py={16}
      title={[
        <Inter fz={15} w={96} sx={{ lineHeight: "18px" }}>
          EXERCISE RECORD
        </Inter>,
        <Inter fz={22} sx={{ lineHeight: "27px" }}>
          {formatDate(new Date(), "YYYY.MM.DD")}
        </Inter>,
      ]}
      ref={ref}
    >
      <ScrollArea h="calc(100% - 36px)">
        <SimpleGrid cols={2} spacing={40} verticalSpacing={8}>
          {exercises.map((exercise, index) => (
            <ExerciseRecord exercise={exercise} key={index} />
          ))}
        </SimpleGrid>
      </ScrollArea>
    </ContainerCard>
  );
});

interface ExerciseRecordProps {
  exercise: Exercise;
}

const ExerciseRecord: React.FC<ExerciseRecordProps> = ({ exercise }) => {
  return (
    <Flex direction="column" h={40}>
      <Group align="flex-start" spacing={3}>
        <Text fz={10} w={13} sx={{ lineHeight: "inherit" }}>
          ●
        </Text>
        <Flex direction="column" sx={{ flexGrow: 1 }}>
          <Text fz={15} sx={{ lineHeight: "22px" }}>
            {exercise.name}
          </Text>
          <Inter c={colors.primary[300]} fz={15} sx={{ lineHeight: "18px" }}>
            {exercise.kcal}kcal
          </Inter>
        </Flex>
        <Inter c={colors.primary[300]} fz={18} sx={{ lineHeight: "22px" }}>
          {formatDuration(exercise.time)}
        </Inter>
      </Group>
      <Divider color={colors.gray[400]} />
    </Flex>
  );
};

export default ExerciseList;
