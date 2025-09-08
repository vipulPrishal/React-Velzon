// import React, { useState, useEffect } from "react";
// import { Card, Col, Row } from "react-bootstrap";
// import { RevenueCharts } from "./DashboardEcommerceCharts";
// import CountUp from "react-countup";
// import { useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
// import { ongetRevenueChartsData } from "../../slices/thunk";

// const Revenue = () => {
//     const dispatch: any = useDispatch();

//     const [chartData, setchartData] = useState<any>([]);

//     const selectDashboardData = createSelector(
//         (state: any) => state.DashboardEcommerce,
//         (revenueData: any) => revenueData.revenueData
//     );
//     // Inside your component
//     const revenueData: any = useSelector(selectDashboardData);

//     useEffect(() => {
//         setchartData(revenueData);
//     }, [revenueData]);

//     const onChangeChartPeriod = (pType: any) => {
//         dispatch(ongetRevenueChartsData(pType));
//     };

//     useEffect(() => {
//         dispatch(ongetRevenueChartsData("all"));
//     }, [dispatch]);

//     return (
//         <React.Fragment>
//             <Card>
//                 <Card.Header className="border-0 align-items-center d-flex">
//                     <h4 className="card-title mb-0 flex-grow-1">Revenue</h4>
//                     <div className="d-flex gap-1">
//                         <button
//                             type="button"
//                             className="btn btn-soft-dark btn-sm"
//                             onClick={() => {
//                                 onChangeChartPeriod("all");
//                             }}
//                         >
//                             ALL
//                         </button>
//                         <button
//                             type="button"
//                             className="btn btn-soft-dark btn-sm"
//                             onClick={() => {
//                                 onChangeChartPeriod("month");
//                             }}
//                         >
//                             1M
//                         </button>
//                         <button
//                             type="button"
//                             className="btn btn-soft-dark btn-sm"
//                             onClick={() => {
//                                 onChangeChartPeriod("halfyear");
//                             }}
//                         >
//                             6M
//                         </button>
//                         <button
//                             type="button"
//                             className="btn btn-soft-primary btn-sm"
//                             onClick={() => {
//                                 onChangeChartPeriod("year");
//                             }}
//                         >
//                             1Y
//                         </button>
//                     </div>
//                 </Card.Header>

//                 <Card.Header className="p-0 border-0 bg-light-subtle">
//                     <Row className="g-0 text-center">
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         start={0}
//                                         end={7585}
//                                         duration={3}
//                                         separator=","
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Orders</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         suffix="k"
//                                         prefix="$"
//                                         start={0}
//                                         decimals={2}
//                                         end={22.89}
//                                         duration={3}
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Earnings</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp start={0} end={367} duration={3} />
//                                 </h5>
//                                 <p className="text-muted mb-0">Refunds</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0 border-end-0">
//                                 <h5 className="mb-1 text-success">
//                                     <CountUp
//                                         start={0}
//                                         end={18.92}
//                                         decimals={2}
//                                         duration={3}
//                                         suffix="%"
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">
//                                     Conversation Ratio
//                                 </p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Card.Header>

//                 <Card.Body className="p-0 pb-2">
//                     <div className="w-100">
//                         <div dir="ltr">
//                             <RevenueCharts
//                                 series={chartData}
//                                 dataColors='["--vz-success", "--vz-primary", "--vz-danger"]'
//                             />
//                         </div>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </React.Fragment>
//     );
// };

// export default Revenue;

// ----v2----(for showing the lead data in the bar chart (vipulPage)) ------

// import React, { useState, useEffect } from "react";
// import { Card, Col, Row } from "react-bootstrap";
// import { RevenueCharts } from "./DashboardEcommerceCharts";
// import CountUp from "react-countup";
// import { useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
// import { ongetRevenueChartsData } from "../../slices/thunk";

// // Add props interface
// interface RevenueProps {
//     leadData?: any[];
//     title?: string;
// }

// const Revenue = ({ leadData = [], title = "Revenue" }: RevenueProps) => {
//     const dispatch: any = useDispatch();

//     const [chartData, setchartData] = useState<any>([]);

//     const selectDashboardData = createSelector(
//         (state: any) => state.DashboardEcommerce,
//         (revenueData: any) => revenueData.revenueData
//     );

//     const revenueData: any = useSelector(selectDashboardData);

//     // Process lead data for chart
//     const processLeadDataForChart = (data: any[]) => {
//         if (!data || data.length === 0) return [];

//         // Group by lead_source
//         const sourceGroups: { [key: string]: number } = {};
//         data.forEach((lead) => {
//             const source = lead.lead_source || "Unknown";
//             sourceGroups[source] = (sourceGroups[source] || 0) + 1;
//         });

//         // Convert to chart format
//         const sources = Object.keys(sourceGroups);
//         const counts = Object.values(sourceGroups);

//         return [
//             {
//                 name: "Leads by Source",
//                 data: counts,
//             },
//         ];
//     };

//     // Calculate stats from lead data
//     const getStats = () => {
//         if (!leadData || leadData.length === 0) {
//             return {
//                 totalLeads: 0,
//                 validEmails: 0,
//                 validPhones: 0,
//                 conversionRate: 0,
//             };
//         }

//         const totalLeads = leadData.length;
//         const validEmails = leadData.filter(
//             (lead) => lead.is_valid_email
//         ).length;
//         const validPhones = leadData.filter(
//             (lead) => lead.is_valid_phone
//         ).length;
//         const conversionRate =
//             totalLeads > 0 ? (validEmails / totalLeads) * 100 : 0;

//         return { totalLeads, validEmails, validPhones, conversionRate };
//     };

//     useEffect(() => {
//         if (leadData && leadData.length > 0) {
//             // Use lead data
//             const processedData = processLeadDataForChart(leadData);
//             setchartData(processedData);
//         } else {
//             // Use original revenue data
//             setchartData(revenueData);
//         }
//     }, [leadData, revenueData]);

//     const onChangeChartPeriod = (pType: any) => {
//         dispatch(ongetRevenueChartsData(pType));
//     };

//     useEffect(() => {
//         if (!leadData || leadData.length === 0) {
//             dispatch(ongetRevenueChartsData("all"));
//         }
//     }, [dispatch, leadData]);

//     const stats = getStats();

//     return (
//         <React.Fragment>
//             <Card>
//                 <Card.Header className="border-0 align-items-center d-flex">
//                     <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
//                     <div className="d-flex gap-1">
//                         <button
//                             type="button"
//                             className="btn btn-soft-primary btn-sm"
//                         >
//                             ALL
//                         </button>
//                     </div>
//                 </Card.Header>
//                 <Card.Header className="p-0 border-0 bg-light-subtle">
//                     <Row className="g-0 text-center">
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.totalLeads}
//                                         duration={3}
//                                         separator=","
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Total Leads</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.validEmails}
//                                         duration={3}
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Valid Emails</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.validPhones}
//                                         duration={3}
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Valid Phones</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0 border-end-0">
//                                 <h5 className="mb-1 text-success">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.conversionRate}
//                                         decimals={2}
//                                         duration={3}
//                                         suffix="%"
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">
//                                     Email Conversion
//                                 </p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Card.Header>
//                 <Card.Body className="p-0 pb-2">
//                     <div className="w-100">
//                         <div dir="ltr">
//                             <RevenueCharts
//                                 series={chartData}
//                                 dataColors='["--vz-success", "--vz-primary", "--vz-danger"]'
//                             />
//                         </div>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </React.Fragment>
//     );
// };

// export default Revenue;

/*--------v3--- after implementing the lead data in the bar chart (vipulPage) ------*/

// import React, { useState, useEffect } from "react";
// import { Card, Col, Row } from "react-bootstrap";
// import { RevenueCharts, LeadDataBarChart } from "./DashboardEcommerceCharts";
// import CountUp from "react-countup";
// import { useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
// import { ongetRevenueChartsData } from "../../slices/thunk";

// // Add props interface
// interface RevenueProps {
//     leadData?: any[];
//     title?: string;
// }

// const Revenue = ({ leadData = [], title = "Revenue" }: RevenueProps) => {
//     const dispatch: any = useDispatch();

//     const [chartData, setchartData] = useState<any>([]);

//     const selectDashboardData = createSelector(
//         (state: any) => state.DashboardEcommerce,
//         (revenueData: any) => revenueData.revenueData
//     );

//     const revenueData: any = useSelector(selectDashboardData);

//     // Process lead data for chart
//     const processLeadDataForChart = (data: any[]) => {
//         if (!data || data.length === 0) return [];

//         // Group by lead_source
//         const sourceGroups: { [key: string]: number } = {};
//         data.forEach((lead) => {
//             const source = lead.lead_source || "Unknown";
//             sourceGroups[source] = (sourceGroups[source] || 0) + 1;
//         });

//         // Convert to chart format
//         const sources = Object.keys(sourceGroups);
//         const counts = Object.values(sourceGroups);

//         return [
//             {
//                 name: "Leads by Source",
//                 data: counts,
//             },
//         ];
//     };

//     // Calculate stats from lead data
//     const getStats = () => {
//         if (!leadData || leadData.length === 0) {
//             return {
//                 totalLeads: 0,
//                 validEmails: 0,
//                 validPhones: 0,
//                 conversionRate: 0,
//             };
//         }

//         const totalLeads = leadData.length;
//         const validEmails = leadData.filter(
//             (lead) => lead.is_valid_email
//         ).length;
//         const validPhones = leadData.filter(
//             (lead) => lead.is_valid_phone
//         ).length;
//         const conversionRate =
//             totalLeads > 0 ? (validEmails / totalLeads) * 100 : 0;

//         return { totalLeads, validEmails, validPhones, conversionRate };
//     };

//     useEffect(() => {
//         if (leadData && leadData.length > 0) {
//             // Use lead data
//             const processedData = processLeadDataForChart(leadData);
//             setchartData(processedData);
//         } else {
//             // Use original revenue data
//             setchartData(revenueData);
//         }
//     }, [leadData, revenueData]);

//     const onChangeChartPeriod = (pType: any) => {
//         dispatch(ongetRevenueChartsData(pType));
//     };

//     useEffect(() => {
//         if (!leadData || leadData.length === 0) {
//             dispatch(ongetRevenueChartsData("all"));
//         }
//     }, [dispatch, leadData]);

//     const stats = getStats();

//     return (
//         <React.Fragment>
//             <Card>
//                 <Card.Header className="border-0 align-items-center d-flex">
//                     <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
//                     <div className="d-flex gap-1">
//                         <button
//                             type="button"
//                             className="btn btn-soft-primary btn-sm"
//                         >
//                             ALL
//                         </button>
//                     </div>
//                 </Card.Header>
//                 <Card.Header className="p-0 border-0 bg-light-subtle">
//                     <Row className="g-0 text-center">
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.totalLeads}
//                                         duration={3}
//                                         separator=","
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Total Leads</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.validEmails}
//                                         duration={3}
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Valid Emails</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0">
//                                 <h5 className="mb-1">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.validPhones}
//                                         duration={3}
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">Valid Phones</p>
//                             </div>
//                         </Col>
//                         <Col xs={6} sm={3}>
//                             <div className="p-3 border border-dashed border-start-0 border-end-0">
//                                 <h5 className="mb-1 text-success">
//                                     <CountUp
//                                         start={0}
//                                         end={stats.conversionRate}
//                                         decimals={2}
//                                         duration={3}
//                                         suffix="%"
//                                     />
//                                 </h5>
//                                 <p className="text-muted mb-0">
//                                     Email Conversion
//                                 </p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Card.Header>
//                 <Card.Body className="p-0 pb-2">
//                     <div className="w-100">
//                         <div dir="ltr">
//                             {leadData && leadData.length > 0 ? (
//                                 <LeadDataBarChart
//                                     series={chartData}
//                                     dataColors='["--vz-success", "--vz-primary", "--vz-danger"]'
//                                 />
//                             ) : (
//                                 <RevenueCharts
//                                     series={chartData}
//                                     dataColors='["--vz-success", "--vz-primary", "--vz-danger"]'
//                                 />
//                             )}
//                         </div>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </React.Fragment>
//     );
// };

// export default Revenue;

// ------v4//////////

import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { RevenueCharts, LeadDataBarChart } from "./DashboardEcommerceCharts";
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { ongetRevenueChartsData } from "../../slices/thunk";

// Add props interface
interface RevenueProps {
    leadData?: any[];
    title?: string;
}

const Revenue = ({ leadData = [], title = "Revenue" }: RevenueProps) => {
    const dispatch: any = useDispatch();

    const [chartData, setchartData] = useState<any>([]);

    const selectDashboardData = createSelector(
        (state: any) => state.DashboardEcommerce,
        (revenueData: any) => revenueData.revenueData
    );

    const revenueData: any = useSelector(selectDashboardData);

    // Process lead data for chart
    // const processLeadDataForChart = (data: any[]) => {
    //     if (!data || data.length === 0) return [];

    //     // Group by lead_source
    //     const sourceGroups: { [key: string]: number } = {};
    //     data.forEach((lead) => {
    //         const source = lead.lead_source || "Unknown";
    //         sourceGroups[source] = (sourceGroups[source] || 0) + 1;
    //     });

    //     // Convert to chart format and create mutable copy
    //     const sources = Object.keys(sourceGroups);
    //     const counts = Object.values(sourceGroups);

    //     // Return a new mutable object
    //     return [
    //         {
    //             name: "Leads by Source",
    //             data: [...counts], // Create a new array
    //         },
    //     ];
    // };

    // Process lead data for chart
    const processLeadDataForChart = (data: any[]) => {
        if (!data || data.length === 0) return [];

        // Group by lead_source
        const sourceGroups: { [key: string]: number } = {};
        data.forEach((lead) => {
            const source = lead.lead_source || "Unknown";
            sourceGroups[source] = (sourceGroups[source] || 0) + 1;
        });

        // Convert to chart format - IMPORTANT: Create proper bar chart data
        const sources = Object.keys(sourceGroups);
        const counts = Object.values(sourceGroups);

        // Return data in proper format for bar chart
        return [
            {
                name: "Leads by Source",
                data: counts,
                type: "bar", // Explicitly specify type
            },
        ];
    };

    // Calculate stats from lead data
    const getStats = () => {
        if (!leadData || leadData.length === 0) {
            return {
                totalLeads: 0,
                validEmails: 0,
                validPhones: 0,
                conversionRate: 0,
            };
        }

        const totalLeads = leadData.length;
        const validEmails = leadData.filter(
            (lead) => lead.is_valid_email
        ).length;
        const validPhones = leadData.filter(
            (lead) => lead.is_valid_phone
        ).length;
        const conversionRate =
            totalLeads > 0 ? (validEmails / totalLeads) * 100 : 0;

        return { totalLeads, validEmails, validPhones, conversionRate };
    };

    useEffect(() => {
        if (leadData && leadData.length > 0) {
            // Use lead data
            const processedData = processLeadDataForChart(leadData);
            setchartData(processedData);
        } else {
            // Use original revenue data
            setchartData(revenueData);
        }
    }, [leadData, revenueData]);

    const onChangeChartPeriod = (pType: any) => {
        dispatch(ongetRevenueChartsData(pType));
    };

    useEffect(() => {
        if (!leadData || leadData.length === 0) {
            dispatch(ongetRevenueChartsData("all"));
        }
    }, [dispatch, leadData]);

    const stats = getStats();

    return (
        <React.Fragment>
            <Card>
                <Card.Header className="border-0 align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
                    <div className="d-flex gap-1">
                        <button
                            type="button"
                            className="btn btn-soft-primary btn-sm"
                        >
                            ALL
                        </button>
                    </div>
                </Card.Header>
                <Card.Header className="p-0 border-0 bg-light-subtle">
                    <Row className="g-0 text-center">
                        <Col xs={6} sm={3}>
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                    <CountUp
                                        start={0}
                                        end={stats.totalLeads}
                                        duration={3}
                                        separator=","
                                    />
                                </h5>
                                <p className="text-muted mb-0">Total Leads</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                    <CountUp
                                        start={0}
                                        end={stats.validEmails}
                                        duration={3}
                                    />
                                </h5>
                                <p className="text-muted mb-0">Valid Emails</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                    <CountUp
                                        start={0}
                                        end={stats.validPhones}
                                        duration={3}
                                    />
                                </h5>
                                <p className="text-muted mb-0">Valid Phones</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className="p-3 border border-dashed border-start-0 border-end-0">
                                <h5 className="mb-1 text-success">
                                    <CountUp
                                        start={0}
                                        end={stats.conversionRate}
                                        decimals={2}
                                        duration={3}
                                        suffix="%"
                                    />
                                </h5>
                                <p className="text-muted mb-0">
                                    Email Conversion
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-0 pb-2">
                    <div className="w-100">
                        <div dir="ltr">
                            {leadData && leadData.length > 0 ? (
                                <LeadDataBarChart
                                    series={chartData}
                                    dataColors='["--vz-success", "--vz-primary", "--vz-danger"]'
                                />
                            ) : (
                                <RevenueCharts
                                    series={chartData}
                                    dataColors='["--vz-success", "--vz-primary", "--vz-danger"]'
                                />
                            )}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Revenue;
