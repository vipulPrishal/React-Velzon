import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
//Import Breadcrumb
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Head } from "@inertiajs/react";
import Layout from "../../../Layouts";

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '300px',
};

const center = { lat: 37.778519, lng: -122.40564 };
const second = { lat: 54.5260, lng: 15.2551 }
const third = { lat: 8.7832, lng: 34.5085 }
const fourth = { lat: 19.0760, lng: 72.8777 }


const GoogleMaps = (props: any) => {

    const selectedPlace: any = {}

    const [selected, setSelected] = useState<any>(null);

    const onSelect = (marker: any) => {
        setSelected(marker);
    };


    return (
        <React.Fragment>
                <Head title="Google Maps | Velzon - React Admin & Dashboard Template" />
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Google Maps" pageTitle="Maps" />

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Markers</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                                        <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                                                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                                                    <Marker position={center} onClick={() => onSelect(center)} />
                                                    {selected && (
                                                        <InfoWindow
                                                            position={selected}
                                                            onCloseClick={() => setSelected(null)}
                                                        >
                                                            <div>
                                                                <h1>{selectedPlace.name}</h1>
                                                            </div>
                                                        </InfoWindow>
                                                    )}
                                                </GoogleMap>
                                            </LoadScript>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Overlays</h4>
                                    </Card.Header>
                                    <Card.Body >
                                        <div id="gmaps-overlay" className="gmaps" style={{ position: "relative" }}>
                                        <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                                                <GoogleMap mapContainerStyle={containerStyle} center={second} zoom={14}>
                                                    <Marker position={second} onClick={() => onSelect(second)} />
                                                    {selected && (
                                                        <InfoWindow
                                                            position={selected}
                                                            onCloseClick={() => setSelected(null)}
                                                        >
                                                            <div>
                                                                <h1>{selectedPlace.name}</h1>
                                                            </div>
                                                        </InfoWindow>
                                                    )}
                                                </GoogleMap>
                                            </LoadScript>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card >
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Street View Panoramas</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <div id="panorama" className="gmaps-panaroma" style={{ position: "relative" }}>
                                        <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                                                <GoogleMap mapContainerStyle={containerStyle} center={third} zoom={20}>
                                                    <Marker position={third} onClick={() => onSelect(third)} />
                                                    {selected && (
                                                        <InfoWindow
                                                            position={selected}
                                                            onCloseClick={() => setSelected(null)}
                                                        >
                                                            <div>
                                                                <h1>{selectedPlace.name}</h1>
                                                            </div>
                                                        </InfoWindow>
                                                    )}
                                                </GoogleMap>
                                            </LoadScript>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Map Types</h4>
                                    </Card.Header>

                                    <div className="card-body">
                                        <div id="gmaps-types" className="gmaps" style={{ position: "relative" }}>
                                        <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                                                <GoogleMap mapContainerStyle={containerStyle} center={fourth} zoom={20}>
                                                    <Marker position={fourth} onClick={() => onSelect(fourth)} />
                                                    {selected && (
                                                        <InfoWindow
                                                            position={selected}
                                                            onCloseClick={() => setSelected(null)}
                                                        >
                                                            <div>
                                                                <h1>{selectedPlace.name}</h1>
                                                            </div>
                                                        </InfoWindow>
                                                    )}
                                                </GoogleMap>
                                            </LoadScript>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </React.Fragment>
    );
}

GoogleMaps.layout = (page: any) => <Layout children={page} />
export default GoogleMaps

