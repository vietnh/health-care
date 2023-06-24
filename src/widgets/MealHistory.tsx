import Hexagon from "@/components/Button/Hexagon";
import { Knife, Cup } from "@/components/Icons";
import Inter from "@/components/Text/Inter";
import { colors } from "@/theme";
import { Flex, Grid } from "@mantine/core";
import Image from 'next/image';

const MealHistory: React.FC = () => {
  return (
    <Flex direction='column' align='center' px={160}>
      <Filter />
      <Grid gutter={8} align='stretch' justify='center' w={960}>
        <Grid.Col span={3}><Image src='/m01.jpg' width={234} height={234} alt='m01' /></Grid.Col>
        <Grid.Col span={3}><Image src='/l03.jpg' width={234} height={234} alt='m01' /></Grid.Col>
        <Grid.Col span={3}><Image src='/d01.jpg' width={234} height={234} alt='m01' /></Grid.Col>
        <Grid.Col span={3}><Image src='/l01.jpg' width={234} height={234} alt='m01' /></Grid.Col>
      </Grid>
    </Flex>
  );
}

const Filter: React.FC = () => {
  const gradient = {
    from: colors.primary[300],
    to: colors.primary[400]
  };

  return (
    <Flex justify='center' align='center' gap={64} py={24}>
      <Hexagon size={136} gradient={gradient}>
        <Knife width={53} height={45} />
        <Inter size={20} color='white'>Morning</Inter>
      </Hexagon>
      <Hexagon size={136} gradient={gradient}>
        <Knife width={53} height={45} />
        <Inter size={20} color='white'>Lunch</Inter>
      </Hexagon>
      <Hexagon size={136} gradient={gradient}>
        <Knife width={53} height={45} />
        <Inter size={20} color='white'>Dinner</Inter>
      </Hexagon>
      <Hexagon size={136} gradient={gradient}>
        <Cup width={34} height={40} />
        <Inter size={20} color='white'>Snack</Inter>
      </Hexagon>
    </Flex>
  );
}

export default MealHistory;