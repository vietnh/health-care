import SmallButton from "@/components/Button/Small";
import { ImageCard } from "@/components/Card/ImageCard";
import Inter from "@/components/Text/Inter";
import { colors } from "@/theme";
import { Flex, createStyles } from "@mantine/core";

export enum RecordCategoryType {
  BodyRecord = "BODY RECORD",
  MyExercise = "MY EXERCISE",
  MyDiary = "MY DIARY",
}

export interface RecordCategoriesProps {
  onClick: (title: RecordCategoryType) => void;
}

const RecordCategories: React.FC<RecordCategoriesProps> = ({ onClick }) => {
  return (
    <Flex justify="center" align="stretch" gap={48}>
      <RecordCategory
        imgSrc="/my-recommend-1.png"
        title={RecordCategoryType.BodyRecord}
        content="自分のカラダの記録"
        onClick={onClick}
      />
      <RecordCategory
        imgSrc="/my-recommend-2.png"
        title={RecordCategoryType.MyExercise}
        content="自分の運動の記録"
        onClick={onClick}
      />
      <RecordCategory
        imgSrc="/my-recommend-3.png"
        title={RecordCategoryType.MyDiary}
        content="自分の日記"
        onClick={onClick}
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
  title: RecordCategoryType;
  content: string;
  onClick: (title: RecordCategoryType) => void;
}

const RecordCategory: React.FC<RecordCategoryProps> = ({
  imgSrc,
  title,
  content,
  onClick,
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
        <SmallButton w={160} color={colors.primary[400]} onClick={() => onClick(title)}>
          {content}
        </SmallButton>
      </Flex>
    </ImageCard>
  );
};

export default RecordCategories;
