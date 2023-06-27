import { colors } from "@/theme";
import { Card, CardProps, Flex } from "@mantine/core";

export interface ContainerCardProps extends CardProps {
  title?: React.ReactNode[];
}


const ContainerCard: React.FC<ContainerCardProps> = ({ title, children, ...others }) => {
  return (
    <Card bg={colors.dark[500]} radius={0} c='white' {...others}>
      {title && (
        <Flex align='center' h={36}>
          {title}
        </Flex>
      )}
      {children}
    </Card>
  );
}

export default ContainerCard;