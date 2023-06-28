import { MealHistory, MealType } from "@/app/api/meal-histories/route";
import Hexagon from "@/components/Button/Hexagon";
import PrimaryButton from "@/components/Button/Primary";
import { ImageCard } from "@/components/Card/ImageCard";
import { Knife, Cup } from "@/components/Icons";
import Inter from "@/components/Text/Inter";
import useFetchList from "@/hooks/useFetchList";
import { colors } from "@/theme";
import { formatDate } from "@/utils/date";
import { Flex, Grid } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { useState } from "react";

const MealHistory: React.FC = () => {
  const [mealType, setMealType] = useState<MealType | null>(null);
  const { data: mealHistories, fetch } = useFetchList<MealHistory>(
    "/api/meal-histories"
  );

  return (
    <Flex direction="column" align="center" px={160} pb={64}>
      <MealTypeFilter
        onClick={(type) => {
          fetch({
            type,
            page: "1",
            perPage: mealHistories.length.toString(),
          });
          setMealType(type);
        }}
      />
      <Grid gutter={8} align="stretch" w={960}>
        {mealHistories.map((meal, index) => (
          <Grid.Col span={3} key={index}>
            <MealInfo meal={meal} />
          </Grid.Col>
        ))}
      </Grid>
      <PrimaryButton
        w={288}
        mt={28}
        onClick={() => fetch(mealType ? { type: mealType } : {}, true)}
      >
        記録をもっと見る
      </PrimaryButton>
    </Flex>
  );
};

const MealTypeFilter: React.FC<{
  onClick: (type: MealType) => void;
}> = ({ onClick }) => {
  const gradient = {
    from: colors.primary[300],
    to: colors.primary[400],
  };

  return (
    <Flex justify="center" align="center" gap={64} py={24}>
      <Hexagon
        size={136}
        gradient={gradient}
        onClick={() => onClick(MealType.Morning)}
      >
        <Knife width={53} height={45} />
        <Inter size={20} color="white">
          Morning
        </Inter>
      </Hexagon>
      <Hexagon
        size={136}
        gradient={gradient}
        onClick={() => onClick(MealType.Lunch)}
      >
        <Knife width={53} height={45} />
        <Inter size={20} color="white">
          Lunch
        </Inter>
      </Hexagon>
      <Hexagon
        size={136}
        gradient={gradient}
        onClick={() => onClick(MealType.Dinner)}
      >
        <Knife width={53} height={45} />
        <Inter size={20} color="white">
          Dinner
        </Inter>
      </Hexagon>
      <Hexagon
        size={136}
        gradient={gradient}
        onClick={() => onClick(MealType.Snack)}
      >
        <Cup width={34} height={40} />
        <Inter size={20} color="white">
          Snack
        </Inter>
      </Hexagon>
    </Flex>
  );
};

interface HistoryProps {
  meal: MealHistory;
}

const MealInfo: React.FC<HistoryProps> = ({ meal }) => {
  const { imgSrc, date, type } = meal;

  return (
    <Flex direction="column" gap={8}>
      <ImageCard
        imageProps={{
          src: imgSrc,
          alt: imgSrc,
          width: 234,
          height: 234,
        }}
      >
        <Flex direction="column" gap={5} sx={{ alignSelf: "flex-end" }}>
          <Flex
            align="center"
            w={120}
            h={32}
            bg={colors.primary[300]}
            px={8}
            py={7}
          >
            <Inter fz={15} color="white">
              {formatDate(date, "MM.YY")}.{upperFirst(type)}
            </Inter>
          </Flex>
        </Flex>
      </ImageCard>
    </Flex>
  );
};

export default MealHistory;
