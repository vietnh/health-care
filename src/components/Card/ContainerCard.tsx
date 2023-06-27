import { colors } from "@/theme";
import { Card, CardProps, Flex } from "@mantine/core";
import { forwardRef } from "react";

export interface ContainerCardProps extends CardProps {
  title?: React.ReactNode[];
}

const ContainerCard = forwardRef<HTMLDivElement, ContainerCardProps>(
  ({ title, children, ...others }, ref) => {
    return (
      <Card bg={colors.dark[500]} radius={0} c="white" {...others} ref={ref}>
        {title && (
          <Flex align="center" h={36}>
            {title}
          </Flex>
        )}
        {children}
      </Card>
    );
  }
);

export default ContainerCard;
