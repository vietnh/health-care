import ContainerCard from "@/components/Card/ContainerCard";
import LineChart from "@/components/Chart/Line";
import Inter from "@/components/Text/Inter";
import { colors } from "@/theme";
import { formatDate } from "@/utils/date";
import { forwardRef } from "react";

function getRandomXY(x?: number, y?: number) {
  const randomX = x || Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
  const randomY = y || Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

  return {
    x: randomX,
    y: randomY,
  };
}

const useGetRecordChartData = () => {
  return [
    {
      id: "bodyWeight",
      color: colors.primary[300],
      data: [
        getRandomXY(6),
        getRandomXY(7),
        getRandomXY(8),
        getRandomXY(9),
        getRandomXY(10),
        getRandomXY(11),
        getRandomXY(12),
        getRandomXY(1),
        getRandomXY(2),
        getRandomXY(3),
        getRandomXY(4),
        getRandomXY(5),
      ],
    },
    {
      id: "bodyFat",
      color: colors.secondary[300],
      data: [
        getRandomXY(6),
        getRandomXY(7),
        getRandomXY(8),
        getRandomXY(9),
        getRandomXY(10),
        getRandomXY(11),
        getRandomXY(12),
        getRandomXY(1),
        getRandomXY(2),
        getRandomXY(3),
        getRandomXY(4),
        getRandomXY(5),
      ],
    },
  ];
};

const BodyRecord = forwardRef<HTMLDivElement>((_, ref) => {
  const data = useGetRecordChartData();

  return (
    <ContainerCard
      w={960}
      h={304}
      px={32}
      py={16}
      title={[
        <Inter fz={15} w={96} sx={{ lineHeight: "18px" }}>
          BODY RECORD
        </Inter>,
        <Inter fz={22} sx={{ lineHeight: "27px" }}>
          {formatDate(new Date(), "YYYY.MM.DD")}
        </Inter>,
      ]}
      ref={ref}
    >
      <LineChart
        data={data}
        margin={{ top: 5, right: 50, bottom: 87, left: 50 }}
      />
    </ContainerCard>
  );
});

export default BodyRecord;
