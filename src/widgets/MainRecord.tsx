import ContainerCard from "@/components/Card/ContainerCard";
import LineChart from "@/components/Chart/Line";
import { colors } from "@/theme";

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

const MainRecord: React.FC = () => {
  const data = useGetRecordChartData();

  return (
    <ContainerCard w={740} h={316} py={12} px={48}>
      <LineChart
        data={data}
        margin={{ top: 0, right: 50, bottom: 30, left: 10 }}
      />
    </ContainerCard>
  );
};

export default MainRecord;
