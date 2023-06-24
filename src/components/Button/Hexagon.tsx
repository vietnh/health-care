import { Box, DefaultProps, Flex, createStyles } from "@mantine/core";
import { PropsWithChildren } from "react";

const useStyles = createStyles((theme, props: HexagonProps) => {
  const height = props.size - 20;
  const width = (2 * height) / Math.sqrt(3);

  return {
    wrapper: {
      width: props.size,
      height: props.size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    root: {
      transform: 'rotate(90deg)',
      width: width,
      height: height,
      background: `linear-gradient(0deg, ${props.gradient.from}, ${props.gradient.to})`,
      position: 'relative',
      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      cursor: 'pointer'
    },
    content: {
      transform: 'rotate(-90deg)',
      position: 'absolute',
      textAlign: 'center'
    }
  }
});

export interface HexagonProps extends PropsWithChildren<DefaultProps> {
  size: number,
  gradient: {
    from: string;
    to: string;
  };
  onClick?: () => void;
}

const Hexagon: React.FC<HexagonProps> = (props) => {
  const { classes } = useStyles(props);

  return (
    <Box className={classes.wrapper}>
      <Flex align='center' justify='center' className={classes.root} onClick={props.onClick}>
        <div className={classes.content}>{props.children}</div>
      </Flex>
    </Box>
  );
};

export default Hexagon;