import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PopularityChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchAnimalCounts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:YOUR_PORT/api/animals"
        ); // Remplacez par votre URL API
        const animals = response.data;

        const labels = animals.map((animal) => animal.name);
        const counts = animals.map((animal) => animal.count);

        setChartData({
          labels,
          datasets: [
            {
              label: "Popularité des animaux",
              data: counts,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de popularité",
          error
        );
      }
    };

    fetchAnimalCounts();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PopularityChart;
