import { ButtonProps, Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, color: string | undefined) => ({
  label: {
    fontWeight: 300,
  },
  inner: {
    border: 'none',
    ...(color && { backgroundColor: color }),
  }
}));

const SmallButton: React.FC<
  import("@mantine/utils").PolymorphicComponentProps<"button", ButtonProps>
> = ({ children, color, ...props }) => {
  const { classes } = useStyles(color);
  return (
    <Button
      h={24}
      p={0}
      classNames={{
        label: classes.label,
        inner: classes.inner,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SmallButton;