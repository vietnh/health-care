import { colors } from "@/theme"
import { ScrollArea as MantineScrollArea, ScrollAreaProps, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  root: {
    paddingRight: 32,
  },
  scrollbar: {
    background: colors.gray[400],
    padding: 0,
  },
  thumb: {
    borderRadius: 3,
    backgroundColor: colors.primary[300],
    '&, &:hover': {
      background: colors.primary[300]
    },
  }
}));

const ScrollArea: React.FC<ScrollAreaProps> = ({ children, ...others }) => {
  const { classes } = useStyles();
  return (
    <MantineScrollArea.Autosize
      offsetScrollbars
      scrollbarSize={6}
      type="auto"
      classNames={classes}
      {...others}
    >
      {children}
    </MantineScrollArea.Autosize>
  )
}

export default ScrollArea;