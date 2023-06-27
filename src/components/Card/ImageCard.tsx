import { colors } from "@/theme";
import { Box, CardProps, Flex, createStyles } from "@mantine/core";
import Image, { ImageProps } from "next/image";

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateAreas: "background content",
  },
  wrapper: {
    gridArea: 'background',
  },
  image: {
    objectFit: 'cover',
    objectPosition: 'center',
    mixBlendMode: 'luminosity'
  },
  content: {
    gridArea: 'content',
    zIndex: 1,
  }
}));

export interface ImageCardProps extends Omit<CardProps, 'children'> {
  imageProps: ImageProps;
  children?: React.ReactNode;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageProps, children, sx, ...others }) => {
  const { src, alt, width, height } = imageProps;
  const { classes } = useStyles();

  return (
    <Box {...others} pos='relative' className={classes.root}>
      <Box bg={colors.dark[600]} className={classes.wrapper}>
        <Image src={src} alt={alt} width={width} height={height} className={classes.image} />
      </Box>
      <Flex className={classes.content}>
        {children}
      </Flex>
    </Box>
  )
};