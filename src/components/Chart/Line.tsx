import { Period } from "@/app/api/statistics/[period]/route";
import { colors } from "@/theme";
import { LineSvgProps, ResponsiveLine } from "@nivo/line";
import { calculateGridXValues, formatXValue } from "./utils";

export interface LineChartProps extends LineSvgProps {
  period: Period;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  margin,
  period,
  gridXValues,
  ...others
}) => (
  <ResponsiveLine
    data={data}
    colors={{ datum: "color" }}
    margin={margin}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    gridXValues={gridXValues || calculateGridXValues(data)}
    axisBottom={{
      tickSize: 5,
      tickPadding: 4,
      tickRotation: 0,
      format: (value: number) => formatXValue(value, period),
    }}
    axisLeft={null}
    enableGridY={false}
    pointSize={8}
    useMesh={true}
    theme={{
      grid: {
        line: {
          stroke: colors.gray[400],
          strokeWidth: 1,
        },
      },
      textColor: "white",
      fontFamily: "Noto Sans JP",
      fontSize: 12,
      tooltip: {
        container: {
          color: colors.dark[600],
        },
      },
    }}
    {...others}
  />
);

export default LineChart;