// import React, { useState } from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import Header from "../../Layouts/Header";
// import Footer from "../../Layouts/Footer";
// import Revenue from "../DashboardEcommerce/Revenue";
// import Layout from "../../Layouts";
// import RecentActivity from "../DashboardCrypto/RecentActivity";
// import BestSellingProducts from "../DashboardEcommerce/BestSellingProducts";
// import TopSellers from "../DashboardEcommerce/TopSellers";

// // The comp name don't need to be same as the file name
// const VipulDashboard = () => {
//     const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

//     return (
//         <React.Fragment>
//             {/* <Header /> */}
//             <Layout></Layout>
//             {/* <Revenue /> */}

//             <Container fluid>
//                 <Row>
//                     <Col>
//                         <Revenue />
//                         {/* Your other content */}
//                     </Col>
//                     <RecentActivity />
//                 </Row>

//                 <Row>
//                     <BestSellingProducts />
//                     <TopSellers />
//                 </Row>
//             </Container>
//             {/* <Row>
//                 <Col xxl={6} md={6}>
//                     <Card className="card-height-100">
//                         <div className="card-header align-items-center d-flex">
//                             <h4 className="card-title mb-0 flex-grow-1">
//                                 Vipul's Dashboard
//                             </h4>
//                         </div>
//                         <div className="card-body">
//                             <div className="text-center">
//                                 <h2 className="text-primary mb-3">
//                                     Welcome to Vipul's Dashboard!
//                                 </h2>
//                                 <p className="text-muted">
//                                     This is your custom dashboard page
//                                 </p>
//                                 <div className="mt-4">
//                                     <h5>Selected Period: {selectedPeriod}</h5>
//                                     <p>This page is working!</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </Card>
//                 </Col>

//                 <Col xxl={6} md={6}>
//                     <Card className="card-height-100">
//                         <div className="card-header">
//                             <h4 className="card-title mb-0">Statistics</h4>
//                         </div>
//                         <div className="card-body">
//                             <div className="row text-center">
//                                 <div className="col-6">
//                                     <h3 className="text-success">150</h3>
//                                     <p className="text-muted">Total Sales</p>
//                                 </div>
//                                 <div className="col-6">
//                                     <h3 className="text-info">89</h3>
//                                     <p className="text-muted">New Users</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </Card>
//                 </Col>
//             </Row> */}
//             {/* <Footer /> */}
//         </React.Fragment>
//     );
// };

// export default VipulDashboard;

// ----------v2 (ye kro)-------------

import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Revenue from "../DashboardEcommerce/Revenue";
import Layout from "../../Layouts";
import RecentActivity from "../DashboardCrypto/RecentActivity";
import BestSellingProducts from "../DashboardEcommerce/BestSellingProducts";
import TopSellers from "../DashboardEcommerce/TopSellers";
import axios from "axios";

// The comp name don't need to be same as the file name
const VipulDashboard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
    const [leadData, setLeadData] = useState([]);

    // Fetch lead data from API
    useEffect(() => {
        const fetchLeadData = async () => {
            try {
                const response = await axios.get("/api/lead-data");
                setLeadData(response.data);
                console.log("Lead data fetched:", response.data);
            } catch (error) {
                console.error("Error fetching lead data:", error);
            }
        };

        fetchLeadData();
    }, []);

    return (
        <React.Fragment>
            <Layout></Layout>

            <Container fluid>
                <Row>
                    <Col>
                        <Revenue
                            leadData={leadData}
                            title="Lead Data Analytics"
                        />
                    </Col>
                    <RecentActivity />
                </Row>

                <Row>
                    <BestSellingProducts />
                    <TopSellers />
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default VipulDashboard;
