import { Column } from "@/app/api/columns/route";
import PrimaryButton from "@/components/Button/Primary";
import { ImageCard } from "@/components/Card/ImageCard";
import Inter from "@/components/Text/Inter";
import useFetch from "@/hooks/useFetch";
import { colors } from "@/theme";
import { formatDate } from "@/utils/date";
import { Flex, SimpleGrid, Text } from "@mantine/core";

const ColumnList = () => {
  const columns = useFetch<Column[]>('/api/columns', []);

  return (
    <Flex direction="column" align="center">
      <SimpleGrid cols={4} spacing={8} verticalSpacing={8}>
        {columns.map((column, index) => (
          <Column
            imgSrc={column.imgSrc}
            date={formatDate(column.date, "YYYY.MM.DD")}
            time={formatDate(column.date, "HH:mm")}
            content={column.content}
            tags={column.tags}
            key={index}
          />
        ))}
      </SimpleGrid>
      <PrimaryButton w={288} mt={28}>
        記録をもっと見る
      </PrimaryButton>
    </Flex>
  );
};

interface ColumnProps {
  imgSrc: string;
  date: string;
  time: string;
  content: string;
  tags: string[];
}

const Column: React.FC<ColumnProps> = (props) => {
  const { imgSrc, date, time, content, tags } = props;

  return (
    <Flex direction="column" gap={8}>
      <ImageCard
        imageProps={{
          src: imgSrc,
          alt: imgSrc,
          width: 234,
          height: 144,
        }}
      >
        <Flex direction="column" gap={5} sx={{ alignSelf: "flex-end" }}>
          <Flex
            align="center"
            justify="space-between"
            w={144}
            h={24}
            bg={colors.primary[300]}
            px={8}
            py={3}
          >
            <Inter fz={15} color="white">
              {date}
            </Inter>
            <Inter fz={15} color="white">
              {time}
            </Inter>
          </Flex>
        </Flex>
      </ImageCard>
      <Text fz={15} lineClamp={2}>
        {content}
      </Text>
      <Flex wrap="wrap" gap={8}>
        {tags.map((tag, index) => (
          <Text span fz={12} color={colors.primary[400]} key={index}>
            {tag}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default ColumnList;
