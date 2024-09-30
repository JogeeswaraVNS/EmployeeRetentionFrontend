import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function HomePage() {
  const data = {
    labels: [
      "Risk (Low performance, Low potential)",
      "Average performer (Moderate performance, Low potential)",
      "Solid Performer (High performance, Low potential)",
      "Inconsistent Player (Low performance, Moderate potential)",
      "Core Player (Moderate performance, Moderate potential)",
      "High Performer (High performance, Moderate potential)",
      "Potential Gem (Low performance, High potential)",
      "High Potential (Moderate performance, High potential)",
      "Star (High performance, High potential)",
    ],
    datasets: [
      {
        label: "My Dataset",
        data: [139, 110, 107, 119, 129, 103, 61, 101, 128],
        backgroundColor: [
          "#123740",
          "#549aab",
          "#b0d7e1",
          "#0073E5",
          "#7ddc1f",
          "#f6f6f6",
          "#f1802d",
          "#f44336",
          "#03a9f4",
        ],
        borderColor: [
          "#123740",
          "#549aab",
          "#b0d7e1",
          "#0073E5",
          "#7ddc1f",
          "#f6f6f6",
          "#f1802d",
          "#f44336",
          "#03a9f4",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'left', // Can be 'top', 'left', 'bottom', 'right'
        labels: {
          font: {
            size: 16, // Font size for legend labels
            family: "'Arial', sans-serif", // Font family for legend labels
            style: 'italic', // Font style for legend labels (normal, italic, oblique)
            weight: 'bold', // Font weight for legend labels
          },
          color: 'white', // Color of legend labels
          padding: 20, // Padding around legend items
          boxWidth: 20, // Width of color box in legend
          boxHeight: 20, // Height of color box in legend
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10
      }
    }
  };

  function AccuracyTable({ data }) {
    const rows = [];

    for (let i = 0; i < data.labels.length; i += 2) {
      rows.push({
        training: data.datasets[0].data[i],
        validation: data.datasets[0].data[i + 1],
        split:
          data.labels[i].split(" ")[2] +
          " " +
          data.labels[i].split(" ")[3] +
          " " +
          data.labels[i].split(" ")[4],
      });
    }

    return (
      <div
        style={{ width: "100%", textAlign: "center" }}
        className="col table table-borderless table-dark table-hover"
      >
        <table>
          <thead>
            <tr>
              <th className="px-3 py-2">
                <h5>Training Accuracy</h5>
              </th>
              <th className="px-3 py-2">
                <h5>Validation Accuracy</h5>
              </th>
              <th className="px-3 py-2">
                <h5>Dataset Split</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-3 py-2">
                  <h5>{row.training}</h5>
                </td>
                <td>
                  <h5>{row.validation}</h5>
                </td>
                <td>
                  <h5>{row.split}</h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function LossTable({ data }) {
    const rows = [];

    for (let i = 0; i < data.labels.length; i += 2) {
      rows.push({
        training: data.datasets[0].data[i],
        validation: data.datasets[0].data[i + 1],
        split:
          data.labels[i].split(" ")[2] +
          " " +
          data.labels[i].split(" ")[3] +
          " " +
          data.labels[i].split(" ")[4],
      });
    }

    return (
      <div
        style={{ width: "100%", textAlign: "center" }}
        className="col table table-borderless table-dark table-hover"
      >
        <table>
          <thead>
            <tr>
              <th style={{ width: "36.5%" }} className="px-3 py-2">
                <h5>Training Loss</h5>
              </th>
              <th style={{ width: "36.5%" }} className="px-3 py-2">
                <h5>Validation Loss</h5>
              </th>
              <th style={{ width: "35%" }} className="px-3 py-2">
                <h5>Dataset Split</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-3 py-2">
                  <h5>{row.training}</h5>
                </td>
                <td>
                  <h5>{row.validation}</h5>
                </td>
                <td>
                  <h5>{row.split}</h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const data50samplesAccuracy = {
    labels: [
      "Training - 90 vs 10",
      "Validation - 90 vs 10",
      "Training - 80 vs 20",
      "Validation - 80 vs 20",
      "Training - 70 vs 30",
      "Validation - 70 vs 30",
      "Training - 60 vs 40",
      "Validation - 60 vs 40",
      "Training - 50 vs 50",
      "Validation - 50 vs 50",
    ],
    datasets: [
      {
        backgroundColor: ["#0073E5", "#7ddc1f"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          99.16, 97.33, 98.83, 92.89, 97.96, 90.52, 94.12, 84.56, 90.8, 79.29,
        ],
      },
    ],
  };

  const data100samplesAccuracy = {
    labels: [
      "Training - 90 vs 10",
      "Validation - 90 vs 10",
      "Training - 80 vs 20",
      "Validation - 80 vs 20",
      "Training - 70 vs 30",
      "Validation - 70 vs 30",
      "Training - 60 vs 40",
      "Validation - 60 vs 40",
      "Training - 50 vs 50",
      "Validation - 50 vs 50",
    ],
    datasets: [
      {
        backgroundColor: ["#f44336", "#03a9f4"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          99.88, 97.56, 99.56, 96.56, 99.71, 94.81, 99.18, 94.0, 96.88, 87.91,
        ],
      },
    ],
  };

  const data150samplesAccuracy = {
    labels: [
      "Training - 90 vs 10",
      "Validation - 90 vs 10",
      "Training - 80 vs 20",
      "Validation - 80 vs 20",
      "Training - 70 vs 30",
      "Validation - 70 vs 30",
      "Training - 60 vs 40",
      "Validation - 60 vs 40",
      "Training - 50 vs 50",
      "Validation - 50 vs 50",
    ],
    datasets: [
      {
        backgroundColor: ["#f6f6f6", "#f1802d"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          99.84, 97.63, 99.72, 97.19, 99.83, 96.79, 99.6, 95.56, 98.75, 92.62,
        ],
      },
    ],
  };

  const data50samplesLoss = {
    labels: [
      "Training - 90 vs 10",
      "Validation - 90 vs 10",
      "Training - 80 vs 20",
      "Validation - 80 vs 20",
      "Training - 70 vs 30",
      "Validation - 70 vs 30",
      "Training - 60 vs 40",
      "Validation - 60 vs 40",
      "Training - 50 vs 50",
      "Validation - 50 vs 50",
    ],
    datasets: [
      {
        backgroundColor: ["#0073E5", "#7ddc1f"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          0.2407, 0.253, 0.3085, 0.4077, 0.4017, 0.4892, 0.6732, 0.7755, 0.8191,
          0.97,
        ],
      },
    ],
  };

  const data100samplesLoss = {
    labels: [
      "Training - 90 vs 10",
      "Validation - 90 vs 10",
      "Training - 80 vs 20",
      "Validation - 80 vs 20",
      "Training - 70 vs 30",
      "Validation - 70 vs 30",
      "Training - 60 vs 40",
      "Validation - 60 vs 40",
      "Training - 50 vs 50",
      "Validation - 50 vs 50",
    ],
    datasets: [
      {
        backgroundColor: ["#f44336", "#03a9f4"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          0.0593, 0.1235, 0.0824, 0.1509, 0.1008, 0.2109, 0.1518, 0.2666, 0.351,
          0.5107,
        ],
      },
    ],
  };

  const data150samplesLoss = {
    labels: [
      "Training - 90 vs 10",
      "Validation - 90 vs 10",
      "Training - 80 vs 20",
      "Validation - 80 vs 20",
      "Training - 70 vs 30",
      "Validation - 70 vs 30",
      "Training - 60 vs 40",
      "Validation - 60 vs 40",
      "Training - 50 vs 50",
      "Validation - 50 vs 50",
    ],
    datasets: [
      {
        backgroundColor: ["#f6f6f6", "#f1802d"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          0.0285, 0.0926, 0.0396, 0.103, 0.0522, 0.1275, 0.0797, 0.1761, 0.1477,
          0.2864,
        ],
      },
    ],
  };

  return (
    <div className="">
      <div className="px-5">
        <h3 className="text-white text-center pt-4">
          Balancing Data Set - 50 Samples per Category
        </h3>
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="pt-4"
        >
          <div
            className=""
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <div className="p-4">
              <Bar
                data={data50samplesAccuracy}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Training Accuracy and Validation Accuracy for 50 Samples",
                      color: "white",
                    },
                  },
                  indexAxis: "y",
                  scales: {
                    x: {
                      ticks: {
                        color: "white",
                      },
                    },
                    y: {
                      ticks: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <AccuracyTable data={data50samplesAccuracy} />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="pt-4"
        >
          <div
            className=""
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <div className="p-4">
              <Bar
                style={{ width: "100%" }}
                data={data50samplesLoss}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Training Loss and Validation Loss for 50 Samples",
                      color: "white",
                    },
                  },
                  indexAxis: "y",
                  scales: {
                    x: {
                      ticks: {
                        color: "white",
                      },
                    },
                    y: {
                      ticks: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <LossTable data={data50samplesLoss} />
          </div>
        </div>

        <h3 className="text-white text-center pt-4">
          Balancing Data Set - 100 Samples per Category
        </h3>
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="pt-4"
        >
          <div
            className=""
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <div className="p-4">
              <Bar
                style={{ width: "100%" }}
                data={data100samplesAccuracy}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Training Accuracy and Validation Accuracy for 100 Samples",
                      color: "white",
                    },
                  },
                  indexAxis: "y",
                  scales: {
                    x: {
                      ticks: {
                        color: "white",
                      },
                    },
                    y: {
                      ticks: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <AccuracyTable data={data100samplesAccuracy} />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="pt-4"
        >
          <div
            className=""
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <div className="p-4">
              <Bar
                style={{ width: "100%" }}
                data={data100samplesLoss}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Training Loss and Validation Loss for 100 Samples",
                      color: "white",
                    },
                  },
                  indexAxis: "y",
                  scales: {
                    x: {
                      ticks: {
                        color: "white",
                      },
                    },
                    y: {
                      ticks: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <LossTable data={data100samplesLoss} />
          </div>
        </div>

        <h3 className="text-white text-center pt-4">
          Balancing Data Set - 150 Samples per Category
        </h3>
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="pt-4"
        >
          <div
            className=""
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <div className="p-4">
              <Bar
                style={{ width: "100%" }}
                data={data150samplesAccuracy}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Training Accuracy and Validation Accuracy for 150 Samples",
                      color: "white",
                    },
                  },
                  indexAxis: "y",
                  scales: {
                    x: {
                      ticks: {
                        color: "white",
                      },
                    },
                    y: {
                      ticks: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <AccuracyTable data={data150samplesAccuracy} />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="py-4 "
        >
          <div
            className=""
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <div className="p-4">
              <Bar
                style={{ width: "100%" }}
                data={data150samplesLoss}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Training Loss and Validation Loss for 150 Samples",
                      color: "white",
                    },
                  },
                  indexAxis: "y",
                  scales: {
                    x: {
                      ticks: {
                        color: "white",
                      },
                    },
                    y: {
                      ticks: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid white",
              width: "35rem",
              height: "19rem",
            }}
          >
            <LossTable data={data100samplesLoss} />
          </div>
        </div>


        <div style={{marginTop:'',paddingRight:'10rem',paddingLeft:'10rem'}} >
          <Pie data={data} options={options} />;
</div>
      </div>
    </div>
  );
}

export default HomePage;
