import { PowerstatsType } from "../../shared/types";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function PowerStats({ stats }: { stats: PowerstatsType }) {
  const data = {
    labels: ["INT", "STR", "HEX", "CON", "POW", "COM"],
    datasets: [
      {
        label: "points",
        data: Object.values(stats),
        backgroundColor: "rgb(5, 166, 225,0.7)",
        borderColor: "#2a335e",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className=" w-72 h-72 text-calm">
      <Radar data={data} />
    </div>
  );
}
