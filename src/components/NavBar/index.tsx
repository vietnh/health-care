import { colors } from "@/theme";
import { createStyles, DefaultProps, Flex } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    position: "fixed",
    backgroundColor: colors.dark[500],
    padding: `8px 160px`,
    zIndex: 100,
    boxShadow: '0px 3px 6px #00000029',
  },
}));

export interface NavBarProps extends DefaultProps {
  leftContent?: React.ReactNode,
  rightContent?: React.ReactNode,
}

export const NavBar: React.FC<NavBarProps> = ({ leftContent, rightContent, ...others }) => {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root} justify='space-between' align='center' {...others}>
      {leftContent}
      {rightContent}
    </Flex>
  );
};