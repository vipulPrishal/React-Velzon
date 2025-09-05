import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Dropdown,
  Row,
  Form,
  Image,
} from "react-bootstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";

import DualListbox from './DualListbox';

import usflag from '../../../../images/flags/us.svg'
import SimpleBar from "simplebar-react";
import { country } from "../../../common/data";
import { Head } from "@inertiajs/react";
import Layout from "../../../Layouts";

const FormAdvanced = () => {
  const [defaultCounter, setdefaultCounter] = useState<number>(5);
  const [lightCounter, setlightCounter] = useState<number>(4);
  const [fullwidthCounter, setfullwidthCounter] = useState<number>(2);
  const [lfullwidthCounter, setlfullwidthCounter] = useState<number>(1);
  const [blueCounter, setblueCounter] = useState<number>(9);
  const [skyCounter, setskyCounter] = useState<number>(5);
  const [greenCounter, setgreenCounter] = useState<number>(7);
  const [tealCounter, settealCounter] = useState<number>(3);
  const [yellowCounter, setyellowCounter] = useState<number>(8);
  const [redCounter, setredCounter] = useState<number>(5);

  function countUP(id: any, prev_data_attr: any) {
    id(prev_data_attr + 1);
  }

  function countDown(id: any, prev_data_attr: any) {
    id(prev_data_attr - 1);
  }


  const [seletedCountry, setseletedCountry] = useState<any>('');
  const [seletedCountry1, setseletedCountry1] = useState<any>({});

  const [seletedCountry2, setseletedCountry2] = useState<any>('');
  const [seletedCountry3, setseletedCountry3] = useState<any>({
    id: 240,
    flagImg: usflag,
    countryName: "United States of America",
    countryCode: "+1"
  });

  const [seletedCountry4, setseletedCountry4] = useState<any>({
    id: 240,
    flagImg: usflag,
    countryName: "United States of America",
    countryCode: "+1"
  });

  return (
    <React.Fragment>
      <Head title="Form Advanced | Velzon - React Admin & Dashboard Template" />
      <div className="page-content">

        <Container fluid>
          <BreadCrumb title="Form Advanced" pageTitle="Forms" />

          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h4 className="mb-0">Custom country select input</h4>
                </Card.Header>
                <Card.Body>
                  <Row className="g-3">
                    <Col lg={6}>
                      <div>
                        <Form.Label>Simple select example</Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle as="input" className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry}>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                            <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                              {(country || []).map((item: any, key: number) => (
                                <Dropdown.Item as='li' onClick={() => setseletedCountry(item.countryName)} key={key} className="dropdown-item d-flex">
                                  <div className="flex-shrink-0 me-2">
                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex">
                                      <div className="country-name me-1">{item.countryName}</div>
                                      <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                              ))}
                            </SimpleBar>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <div className="mt-3">
                        <Form.Label>Select input flag with img & name</Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle as="input" style={{ backgroundImage: `url(${seletedCountry1.flagImg && seletedCountry1.flagImg.src})` }} className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry1.countryName}>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                            <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                              {(country || []).map((item: any, key: number) => (
                                <Dropdown.Item as='li' onClick={() => setseletedCountry1(item)} key={key} className="dropdown-item d-flex">
                                  <div className="flex-shrink-0 me-2">
                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex">
                                      <div className="country-name me-1">{item.countryName}</div>
                                      <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                              ))}
                            </SimpleBar>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      <div className="mt-3">
                        <Form.Label>Search input false in dropdown menu</Form.Label>
                        <Dropdown>
                          <Dropdown.Toggle as="input" className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry2}>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                            <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                              {(country || []).map((item: any, key: number) => (
                                <Dropdown.Item as='li' onClick={() => setseletedCountry2(item.countryName)} key={key} className="dropdown-item d-flex">
                                  <div className="flex-shrink-0 me-2">
                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex">
                                      <div className="country-name me-1">{item.countryName}</div>
                                      <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                              ))}
                            </SimpleBar>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div>
                        <Form.Label>Select input with buttons & Flag with number</Form.Label>
                        <Dropdown className='input-group'>
                          <Dropdown.Toggle as="button" className="btn btn-light border arrow-none">
                            <img src={seletedCountry3.flagImg} alt="country flag" className="options-flagimg" height="20" />
                            <span className="countrylist-codeno text-muted">{seletedCountry3.countryCode}</span>
                          </Dropdown.Toggle>
                          <input type="number" className="form-control rounded-end flag-input" placeholder="Enter number" />
                          <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                            <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                              {(country || []).map((item, key) => (
                                <Dropdown.Item as='li' onClick={() => setseletedCountry3(item)} key={key} className="dropdown-item d-flex">
                                  <div className="flex-shrink-0 me-2">
                                    <img src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex">
                                      <div className="country-name me-1">{item.countryName}</div>
                                      <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                              ))}
                            </SimpleBar>
                          </Dropdown.Menu>
                        </Dropdown>

                        <div className="dropdown-menu w-100">
                          <div className="p-2 px-3 pt-1 searchlist-input">
                            <Form.Label type="text" className="form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                          </div>
                          <ul className="list-unstyled dropdown-menu-list mb-0"></ul>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Form.Label>Select input with buttons & Flag</Form.Label>
                        <Dropdown className='input-group' >
                          <Dropdown.Toggle as="button" className="btn btn-light border arrow-none">
                            <img src={seletedCountry4.flagImg} alt="country flag" className="options-flagimg" height="20" />
                          </Dropdown.Toggle>
                          <input type="number" className="form-control rounded-end flag-input" placeholder="Enter number" />
                          <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                            <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                              {(country || []).map((item, key) => (
                                <Dropdown.Item as='li' onClick={() => setseletedCountry4(item)} key={key} className="dropdown-item d-flex">
                                  <div className="flex-shrink-0 me-2">
                                    <img src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex">
                                      <div className="country-name me-1">{item.countryName}</div>
                                      <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                              ))}
                            </SimpleBar>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Form Input Spin</h4>
                </Card.Header>

                <Card.Body>
                  <div>
                    <Row className="gy-4">
                      <Col sm={6}>
                        <div>
                          <h5 className="fs-13 fw-medium text-muted">
                            Default
                          </h5>
                          <div className="input-step">
                            <button
                              type="button"
                              className="minus"
                              onClick={() => {
                                countDown(setdefaultCounter, defaultCounter);
                              }}
                            >
                              –
                            </button>
                            <Form.Control
                              type="number"
                              className="product-quantity"
                              value={defaultCounter}
                              min="0"
                              max="100"
                              readOnly
                            />
                            <button
                              type="button"
                              className="plus"
                              onClick={() => {
                                countUP(setdefaultCounter, defaultCounter);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </Col>

                      <Col sm={6}>
                        <div>
                          <h5 className="fs-13 fw-medium text-muted">Light</h5>
                          <div className="input-step light">
                            <button
                              type="button"
                              className="minus"
                              onClick={() => {
                                countDown(setlightCounter, lightCounter);
                              }}
                            >
                              –
                            </button>
                            <Form.Control
                              type="number"
                              className="product-quantity"
                              value={lightCounter}
                              min="0"
                              max="100"
                              readOnly
                            />
                            <button
                              type="button"
                              className="plus"
                              onClick={() => {
                                countUP(setlightCounter, lightCounter);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="mt-4 pt-2">
                      <Row className="gy-4">
                        <Col sm={6}>
                          <div>
                            <h5 className="fs-13 fw-medium text-muted">
                              Default (Full width)
                            </h5>
                            <div className="input-step full-width">
                              <button
                                type="button"
                                className="minus"
                                onClick={() => {
                                  countDown(
                                    setfullwidthCounter,
                                    fullwidthCounter
                                  );
                                }}
                              >
                                –
                              </button>
                              <Form.Control
                                type="number"
                                className="product-quantity"
                                value={fullwidthCounter}
                                min="0"
                                max="100"
                                readOnly
                              />
                              <button
                                type="button"
                                className="plus"
                                onClick={() => {
                                  countUP(
                                    setfullwidthCounter,
                                    fullwidthCounter
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </Col>

                        <Col sm={6}>
                          <div>
                            <h5 className="fs-13 fw-medium text-muted">
                              Light (Full width)
                            </h5>
                            <div className="input-step full-width light">
                              <button
                                type="button"
                                className="minus"
                                onClick={() => {
                                  countDown(
                                    setlfullwidthCounter,
                                    lfullwidthCounter
                                  );
                                }}
                              >
                                –
                              </button>
                              <Form.Control
                                type="number"
                                className="product-quantity"
                                value={lfullwidthCounter}
                                min="0"
                                max="100"
                                readOnly
                              />
                              <button
                                type="button"
                                className="plus"
                                onClick={() => {
                                  countUP(
                                    setlfullwidthCounter,
                                    lfullwidthCounter
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <Row className="mt-4 pt-2">
                      <h5 className="fs-13 fw-medium text-muted">Colored</h5>
                      <div className="d-flex flex-wrap align-items-start gap-2">
                        <div className="input-step step-primary">
                          <button
                            type="button"
                            className="minus"
                            onClick={() => {
                              countDown(setblueCounter, blueCounter);
                            }}
                          >
                            –
                          </button>
                          <Form.Control
                            type="number"
                            className="product-quantity"
                            value={blueCounter}
                            min="0"
                            max="100"
                            readOnly
                          />
                          <button
                            type="button"
                            className="plus"
                            onClick={() => {
                              countUP(setblueCounter, blueCounter);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="input-step step-secondary">
                          <button
                            type="button"
                            className="minus"
                            onClick={() => {
                              countDown(setskyCounter, skyCounter);
                            }}
                          >
                            –
                          </button>
                          <Form.Control
                            type="number"
                            className="product-quantity"
                            value={skyCounter}
                            min="0"
                            max="100"
                            readOnly
                          />
                          <button
                            type="button"
                            className="plus"
                            onClick={() => {
                              countUP(setskyCounter, skyCounter);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="input-step step-success">
                          <button
                            type="button"
                            className="minus"
                            onClick={() => {
                              countDown(setgreenCounter, greenCounter);
                            }}
                          >
                            –
                          </button>
                          <Form.Control
                            type="number"
                            className="product-quantity"
                            value={greenCounter}
                            min="0"
                            max="100"
                            readOnly
                          />
                          <button
                            type="button"
                            className="plus"
                            onClick={() => {
                              countUP(setgreenCounter, greenCounter);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="input-step step-info">
                          <button
                            type="button"
                            className="minus"
                            onClick={() => {
                              countUP(settealCounter, tealCounter);
                            }}
                          >
                            –
                          </button>
                          <Form.Control
                            type="number"
                            className="product-quantity"
                            value={tealCounter}
                            min="0"
                            max="100"
                            readOnly
                          />
                          <button
                            type="button"
                            className="plus"
                            onClick={() => {
                              countUP(settealCounter, tealCounter);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="input-step step-warning">
                          <button
                            type="button"
                            className="minus"
                            onClick={() => {
                              countDown(setyellowCounter, yellowCounter);
                            }}
                          >
                            –
                          </button>
                          <Form.Control
                            type="number"
                            className="product-quantity"
                            value={yellowCounter}
                            min="0"
                            max="100"
                            readOnly
                          />
                          <button
                            type="button"
                            className="plus"
                            onClick={() => {
                              countUP(setyellowCounter, yellowCounter);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="input-step step-danger">
                          <button
                            type="button"
                            className="minus"
                            onClick={() => {
                              countDown(setredCounter, redCounter);
                            }}
                          >
                            –
                          </button>
                          <Form.Control
                            type="number"
                            className="product-quantity"
                            value={redCounter}
                            min="0"
                            max="100"
                            readOnly
                          />
                          <button
                            type="button"
                            className="plus"
                            onClick={() => {
                              countUP(setredCounter, redCounter);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          {/* Advanced */}
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Auto Complete</h4>
                </Card.Header>
                <Card.Body>
                  <div>
                    <Row className="g-3">
                      <Col lg="6">
                        <div>
                          <Form.Label htmlFor="autoCompleteFruit" className="text-muted">Search Result of Fruit Names</Form.Label>
                          <Form.Control id="autoCompleteFruit" type="text" dir="ltr" spellCheck={true} autoComplete="on" autoCapitalize="off" />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div>
                          <Form.Label htmlFor="autoCompleteCars" className="text-muted">Search Result of Car Names</Form.Label>
                          <Form.Control id="autoCompleteCars" type="text" dir="ltr" spellCheck={true} autoComplete="on" autoCapitalize="off" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Tranfer List</h4>
                </Card.Header>

                <Card.Body>
                  <DualListbox />
                </Card.Body>

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
FormAdvanced.layout = (page: any) => <Layout children={page} />
export default FormAdvanced;