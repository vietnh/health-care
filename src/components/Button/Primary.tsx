import { colors } from "@/theme";
import { ButtonProps, Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  label: {
    fontWeight: 300,
  },
}));

const PrimaryButton: React.FC<
  import("@mantine/utils").PolymorphicComponentProps<"button", ButtonProps>
> = ({ children, ...props }) => {
  const { classes } = useStyles();
  return (
    <Button
      h={56}
      py={16}
      px={4}
      variant="gradient"
      gradient={{ from: colors.primary[300], to: colors.primary[400], deg: 0 }}
      className={classes.label}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
