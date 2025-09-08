// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

// const RevenueCharts = ({ dataColors, series }: any) => {
//     var linechartcustomerColors = getChartColorsArray(dataColors);

//     var options: any = {
//         chart: {
//             height: 370,
//             type: "line",
//             toolbar: {
//                 show: false,
//             },
//         },
//         stroke: {
//             curve: "straight",
//             dashArray: [0, 0, 8],
//             width: [2, 0, 2.2],
//         },
//         fill: {
//             opacity: [0.1, 0.9, 1],
//         },
//         markers: {
//             size: [0, 0, 0],
//             strokeWidth: 2,
//             hover: {
//                 size: 4,
//             },
//         },
//         xaxis: {
//             categories: [
//                 "Jan",
//                 "Feb",
//                 "Mar",
//                 "Apr",
//                 "May",
//                 "Jun",
//                 "Jul",
//                 "Aug",
//                 "Sep",
//                 "Oct",
//                 "Nov",
//                 "Dec",
//             ],
//             axisTicks: {
//                 show: false,
//             },
//             axisBorder: {
//                 show: false,
//             },
//         },
//         grid: {
//             show: true,
//             xaxis: {
//                 lines: {
//                     show: true,
//                 },
//             },
//             yaxis: {
//                 lines: {
//                     show: false,
//                 },
//             },
//             padding: {
//                 top: 0,
//                 right: -2,
//                 bottom: 15,
//                 left: 10,
//             },
//         },
//         legend: {
//             show: true,
//             horizontalAlign: "center",
//             offsetX: 0,
//             offsetY: -5,
//             markers: {
//                 width: 9,
//                 height: 9,
//                 radius: 6,
//             },
//             itemMargin: {
//                 horizontal: 10,
//                 vertical: 0,
//             },
//         },
//         plotOptions: {
//             bar: {
//                 columnWidth: "30%",
//                 barHeight: "70%",
//             },
//         },
//         colors: linechartcustomerColors,
//         tooltip: {
//             shared: true,
//             y: [
//                 {
//                     formatter: function (y: any) {
//                         if (typeof y !== "undefined") {
//                             return y.toFixed(0);
//                         }
//                         return y;
//                     },
//                 },
//                 {
//                     formatter: function (y: any) {
//                         if (typeof y !== "undefined") {
//                             return "$" + y.toFixed(2) + "k";
//                         }
//                         return y;
//                     },
//                 },
//                 {
//                     formatter: function (y: any) {
//                         if (typeof y !== "undefined") {
//                             return y.toFixed(0) + " Sales";
//                         }
//                         return y;
//                     },
//                 },
//             ],
//         },
//     };
//     return (
//         <React.Fragment>
//             <ReactApexChart
//                 dir="ltr"
//                 options={options}
//                 series={series}
//                 type="line"
//                 height="370"
//                 className="apex-charts"
//             />
//         </React.Fragment>
//     );
// };

// const StoreVisitsCharts = ({ dataColors }: any) => {
//     var chartDonutBasicColors = getChartColorsArray(dataColors);
//     const series = [44, 55, 41, 17, 15];
//     var options: any = {
//         labels: ["Direct", "Social", "Email", "Other", "Referrals"],
//         chart: {
//             height: 333,
//             type: "donut",
//         },
//         legend: {
//             position: "bottom",
//         },
//         stroke: {
//             show: false,
//         },
//         dataLabels: {
//             dropShadow: {
//                 enabled: false,
//             },
//         },
//         colors: chartDonutBasicColors,
//     };
//     return (
//         <React.Fragment>
//             <ReactApexChart
//                 dir="ltr"
//                 options={options}
//                 series={series}
//                 type="donut"
//                 height="333"
//                 className="apex-charts"
//             />
//         </React.Fragment>
//     );
// };

// export { RevenueCharts, StoreVisitsCharts };

// --------v2-----(with the data of the DasboardEcommerce)

import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

const RevenueCharts = ({ dataColors, series }: any) => {
    var linechartcustomerColors = getChartColorsArray(dataColors);

    var options: any = {
        chart: {
            height: 370,
            type: "line",
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "straight",
            dashArray: [0, 0, 8],
            width: [2, 0, 2.2],
        },
        fill: {
            opacity: [0.1, 0.9, 1],
        },
        markers: {
            size: [0, 0, 0],
            strokeWidth: 2,
            hover: {
                size: 4,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10,
            },
        },
        legend: {
            show: true,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: -5,
            markers: {
                width: 9,
                height: 9,
                radius: 6,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0,
            },
        },
        colors: linechartcustomerColors,
        tooltip: {
            shared: false,
            intersect: false,
            y: {
                formatter: function (y: any) {
                    if (typeof y !== "undefined") {
                        return "$ " + y.toFixed(2);
                    }
                    return y;
                },
            },
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                className="apex-charts"
                series={series}
                options={options}
                type="line"
                height="370"
            />
        </React.Fragment>
    );
};

const StoreVisitsCharts = ({ dataColors, series }: any) => {
    var barchartcustomerColors = getChartColorsArray(dataColors);

    var options: any = {
        chart: {
            height: 370,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "45%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
        },
        colors: barchartcustomerColors,
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            title: {
                text: "Store Visits",
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return val + " visits";
                },
            },
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                className="apex-charts"
                series={series}
                options={options}
                type="bar"
                height="370"
            />
        </React.Fragment>
    );
};

const LeadDataBarChart = ({ dataColors, series }: any) => {
    var barchartcustomerColors = getChartColorsArray(dataColors);

    // Create a deep copy of series to make it mutable
    const mutableSeries = series ? JSON.parse(JSON.stringify(series)) : [];

    var options: any = {
        chart: {
            height: 370,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        xaxis: {
            categories: [
                "Website",
                "Social Media",
                "Referral",
                "Email Campaign",
                "Trade Show",
                "Cold Call",
                "Google Ads",
                "Facebook Ads",
                "LinkedIn",
                "YouTube",
                "Podcast",
                "Webinar",
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            min: 0,
        },
        colors: barchartcustomerColors,
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "solid",
            opacity: 1,
        },
        stroke: {
            show: false,
        },
        tooltip: {
            shared: false,
            intersect: false,
            y: {
                formatter: function (y: any) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " Leads";
                    }
                    return y;
                },
            },
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                className="apex-charts"
                series={mutableSeries}
                options={options}
                type="bar"
                height="370"
            />
        </React.Fragment>
    );
};

export { RevenueCharts, StoreVisitsCharts, LeadDataBarChart };
