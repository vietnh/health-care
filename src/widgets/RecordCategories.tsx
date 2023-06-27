import SmallButton from "@/components/Button/Small";
import { ImageCard } from "@/components/Card/ImageCard";
import Inter from "@/components/Text/Inter";
import { colors } from "@/theme";
import { Flex, createStyles } from "@mantine/core";

const RecordCategories = () => {
  return (
    <Flex justify="center" align="stretch" gap={48}>
      <RecordCategory
        imgSrc="/my-recommend-1.png"
        title="BODY RECORD"
        content="自分のカラダの記録"
      />
      <RecordCategory
        imgSrc="/my-recommend-2.png"
        title="MY EXERCISE"
        content="自分の運動の記録"
      />
      <RecordCategory
        imgSrc="/my-recommend-3.png"
        title="MY DIARY"
        content="自分の日記"
      />
    </Flex>
  );
};

const useRecordStyles = createStyles((theme) => ({
  image: {
    objectFit: "cover",
    objectPosition: "center",
    mixBlendMode: "luminosity",
  },
}));

interface RecordCategoryProps {
  imgSrc: string;
  title: string;
  content: string;
}

const RecordCategory: React.FC<RecordCategoryProps> = ({
  imgSrc,
  title,
  content,
}) => {
  const { classes } = useRecordStyles();

  return (
    <ImageCard
      imageProps={{
        src: imgSrc,
        alt: title,
        width: 240,
        height: 240,
        className: classes.image,
      }}
      bg={colors.primary[300]}
      p={24}
    >
      <Flex direction="column" align="center" m="auto" gap={5}>
        <Inter fz={25} fw={400} color={colors.primary[300]}>
          {title}
        </Inter>
        <SmallButton w={160} color={colors.primary[400]}>
          {content}
        </SmallButton>
      </Flex>
    </ImageCard>
  );
};

export default RecordCategories;
