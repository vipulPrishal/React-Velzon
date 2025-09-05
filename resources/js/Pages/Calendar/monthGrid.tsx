import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//Import Icons
import FeatherIcon from "feather-icons-react";

import {
  Card,
  Container,
  Form,
  Modal,
  Row,
  Col
} from "react-bootstrap";

import * as Yup from "yup";
import { useFormik } from "formik";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import multiMonthPlugin from '@fullcalendar/multimonth';
import BootstrapTheme from "@fullcalendar/bootstrap";
import Flatpickr from "react-flatpickr";

//redux
import { useSelector, useDispatch } from "react-redux";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import DeleteModal from "../../Components/Common/DeleteModal";

//Simple bar
import SimpleBar from "simplebar-react";
import UpcommingEvents from './UpcommingEvents';
import listPlugin from '@fullcalendar/list';

import { createSelector } from "reselect";
import { onAddNewEvent, onDeleteEvent, onGetCategories, onGetEvents, onGetUpCommingEvent, onUpdateEvent } from "../../slices/thunk";
import { Head, Link } from "@inertiajs/react";
import Layout from "../../Layouts";

const MonthGrid = () => {
  const dispatch: any = useDispatch();
  const [event, setEvent] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);
  const [selectedNewDay, setSelectedNewDay] = useState<any>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEditButton, setIsEditButton] = useState<boolean>(true);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteEvent, setDeleteEvent] = useState<string>('');
  const [eventName, setEventName] = useState<string>("")

  const selectLayoutState = (state: any) => state.Calendar;
  const calendarDataProperties = createSelector(
    selectLayoutState,
    (state: any) => ({
      events: state.events,
      categories: state.categories,
      isEventUpdated: state.isEventUpdated,
    })
  );
  // Inside your component
  const {
    events, categories, isEventUpdated
  }: any = useSelector(calendarDataProperties);

  useEffect(() => {
    dispatch(onGetEvents());
    dispatch(onGetCategories());
    dispatch(onGetUpCommingEvent());
    new Draggable(document.getElementById("external-events") as HTMLElement, {
      itemSelector: ".external-event",
    });
  }, [dispatch]);

  useEffect(() => {
    if (isEventUpdated) {
      setIsEdit(false);
      setEvent({});
    }
  }, [dispatch, isEventUpdated]);

  /**
   * Handling the modal state
   */
  const toggle = () => {
    if (modal) {
      setModal(false);
      setEvent(null);
      setIsEdit(false);
      setIsEditButton(true);
    } else {
      setModal(true);
    }
  };
  /**
   * Handling date click on calendar
   */

  const handleDateClick = (arg: any) => {
    const date = arg["date"];
    setSelectedNewDay(new Date(date).toISOString());
    toggle();
  };

  const str_dt = function formatDate(date: any) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = new Date(date),
      month = "" + monthNames[d.getMonth()],
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day + " " + month, year].join(",");
  };

  /**
   * Handling click on event on calendar
   */

  const handleEventClick = (arg: any) => {
    const event = arg.event;

    console.log("event :: ", event);
    console.log("event.start", event.start);


    const st_date = event.start;
    const ed_date = event.end;
    const r_date =
      ed_date == null
        ? str_dt(st_date)
        : str_dt(st_date) + " to " + str_dt(ed_date);
    const er_date = ed_date === null ? [st_date] : [st_date, ed_date];

    setEvent({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      className: event.classNames,
      category: event.classNames[0],
      location: event._def.extendedProps.location ? event._def.extendedProps.location : "No Loaction",
      description: event._def.extendedProps.description,
      defaultDate: er_date,
      datetag: r_date,
    });
    setSelectedNewDay(er_date)
    setEventName(event.title)
    setDeleteEvent(event.id);
    setIsEdit(true);
    setIsEditButton(true);
    toggle();
  };
  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    dispatch(onDeleteEvent(deleteEvent));
    setDeleteModal(false);
  };

  // events validation
  const validation: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      id: (event && event.id) || "",
      title: (event && event.title) || "",
      category: (event && event.category) || "",
      location: (event && event.location) || "",
      description: (event && event.description) || "",
      defaultDate: (event && event.defaultDate) || [],
      datetag: (event && event.datetag) || "",
      start: (event && event.start) || [],
      end: (event && event.end) || ''
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Select Your Category"),
      location: Yup.string().required("Please Enter Your Location"),
      description: Yup.string().required("Please Enter Your Description"),
      start: Yup.date().required('Start Time is required'),
      end: Yup.date().required('End Time is required'),
      defaultDate: Yup.array().of(Yup.date()).required('Date range is required').min(2, 'Select at least two dates'),
    }),
    onSubmit: (values) => {
      var updatedDay: any = "";
      if (selectedNewDay) {
        updatedDay = new Date(selectedNewDay[1]);
        updatedDay.setDate(updatedDay.getDate());
      }
      console.log("selectedNewDay", selectedNewDay);

      console.log("event.start", event.start);

      if (isEdit) {
        const updateEvent = {
          id: event.id,
          title: values.title,
          className: values.category,
          start: selectedNewDay ? selectedNewDay[0]?.toISOString() : event.start,
          end: selectedNewDay ? updatedDay.toISOString() : event.end,
          location: values.location,
          description: values.description,
          defaultDate: [selectedNewDay[0].toISOString(), selectedNewDay[1].toISOString()]
        };

        console.log("updateEvent", updateEvent);


        // update event
        dispatch(onUpdateEvent(updateEvent));
        validation.resetForm();
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values["title"],
          start: selectedNewDay[0].toISOString(),
          end: updatedDay.toISOString(),
          className: values["category"],
          location: values["location"],
          description: values["description"],
          // defaultDate: values["defaultDate"].toISOString()
          defaultDate: [selectedNewDay[0].toISOString(), selectedNewDay[1].toISOString()]
        };

        // save new event
        dispatch(onAddNewEvent(newEvent));
        validation.resetForm();
      }

      // setSelectedDay(null);
      setSelectedNewDay(null);
      toggle();
    },

  });

  const submitOtherEvent = () => {

    document.getElementById("form-event")?.classList.remove("view-event");

    document
      .getElementById("event-title")?.classList.replace("d-none", "d-block");
    document
      .getElementById("event-category")?.classList.replace("d-none", "d-block");
    (document.getElementById("event-start-date")?.parentNode as HTMLElement)?.classList?.remove("d-none");
    document
      .getElementById("event-start-date")?.classList.replace("d-none", "d-block");
    document
      .getElementById("event-location")?.classList.replace("d-none", "d-block");
    document
      .getElementById("event-description")?.classList.replace("d-none", "d-block");
    document
      .getElementById("event-start-date-tag")?.classList.replace("d-block", "d-none");
    document
      .getElementById("event-location-tag")?.classList.replace("d-block", "d-none");
    document
      .getElementById("event-description-tag")?.classList.replace("d-block", "d-none");

    setIsEditButton(true);
  };

  /**
   * On category darg event
   */
  const onDrag = (event: any) => {
    event.preventDefault();
  };

  /**
   * On calendar drop event
   */
  const onDrop = (event: any) => {
    const date = event["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );

    const draggedEl = event.draggedEl;
    const draggedElclass = draggedEl.className;
    if (
      draggedEl.classList.contains("external-event") &&
      draggedElclass.indexOf("fc-event-draggable") === -1
    ) {
      const modifiedData = {
        id: Math.floor(Math.random() * 1000),
        title: draggedEl.innerText,
        start: modifiedDate,
        className: draggedEl.className,
      };
      dispatch(onAddNewEvent(modifiedData));
    }
  };

  return (
    <React.Fragment>
      <Head title="Month Grid | Velzon - React Admin & Dashboard Template" />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => { setDeleteModal(false) }} recordId={""} />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Month Grid" pageTitle="Apps" />
          <Row>
            <Col xs={12}>
              <Row>
                <Col xl={3}>
                  <Card className="card-h-100">
                    <Card.Body>
                      <button
                        className="btn btn-primary w-100"
                        id="btn-new-event"
                        onClick={toggle}
                      >
                        <i className="mdi mdi-plus"></i> Create New Event
                      </button>

                      <div id="external-events">
                        <br />
                        <p className="text-muted">
                          Drag and drop your event or click in the calendar
                        </p>
                        {categories &&
                          categories.map((category: any) => (
                            <div
                              className={`bg-${category.type}-subtle external-event fc-event text-${category.type}`}
                              key={"cat-" + category.id}
                              draggable
                              onDrag={(event: any) => {
                                onDrag(event);
                              }}
                            >
                              <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                              {category.title}
                            </div>
                          ))}
                      </div>
                    </Card.Body>
                  </Card>
                  <div>
                    <h5 className="mb-1">Upcoming Events</h5>
                    <p className="text-muted">Don't miss scheduled events</p>
                    <SimpleBar
                      className="pe-2 me-n1 mb-3"
                      style={{ height: "400px" }}
                    >
                      <div id="upcoming-event-list">
                        {events &&
                          (events || []).map((event: any, key: any) => (
                            <React.Fragment key={key}>
                              <UpcommingEvents event={event} />
                            </React.Fragment>
                          ))}
                      </div>
                    </SimpleBar>
                  </div>

                  <Card>
                    <Card.Body className="bg-info-subtle">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <FeatherIcon
                            icon="calendar"
                            className="text-info icon-dual-info"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-15">Welcome to your Calendar!</h6>
                          <p className="text-muted mb-0">
                            Event that applications book will appear here. Click
                            on an event to see the details and manage applicants
                            event.
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={9}>
                  <Card className="card-h-100">
                    <Card.Body>
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                          interactionPlugin,
                          listPlugin,
                          multiMonthPlugin
                        ]}
                        initialView="multiMonthYear"
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "multiMonthYear,dayGridWeek,dayGridDay,listWeek",
                        }}
                        events={events}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <div style={{ clear: "both" }}></div>

              <Modal show={modal} onHide={toggle} id="event-modal" centered>
                <Modal.Header className="p-3 bg-info-subtle" closeButton>
                  <h5 className="modal-title">
                    {!!isEdit ? eventName : "Add Event"}
                  </h5>
                </Modal.Header>
                <Modal.Body>
                  <Form
                    className={!!isEdit ? "needs-validation view-event" : "needs-validation"}
                    name="event-form"
                    id="form-event"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    {!!isEdit ? (
                      <div className="text-end">
                        <Link
                          href="#"
                          className="btn btn-sm btn-soft-primary"
                          id="edit-event-btn"
                          onClick={(e: any) => {
                            e.preventDefault();
                            submitOtherEvent();
                            return false;
                          }}>
                          Edit
                        </Link>
                      </div>
                    ) : null}
                    <div className="event-details">
                      <div className="d-flex mb-2">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="flex-shrink-0 me-3">
                            <i className="ri-calendar-event-line text-muted fs-16"></i>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="d-block fw-semibold mb-0" id="event-start-date-tag">
                              {event ? event.datetag : ""}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="flex-shrink-0 me-3">
                          <i className="ri-time-line text-muted fs-16"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="d-block fw-semibold mb-0"><span id="event-timepicker1-tag">12:00 AM</span> - <span id="event-timepicker2-tag">5:30 AM</span></h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="flex-shrink-0 me-3">
                          <i className="ri-map-pin-line text-muted fs-16"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="d-block fw-semibold mb-0">
                            <span id="event-location-tag">
                              {event && event.location !== undefined ? event.location : "No Location"}
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0 me-3">
                          <i className="ri-discuss-line text-muted fs-16"></i>
                        </div>
                        <div className="flex-grow-1">
                          <p className="d-block text-muted mb-0" id="event-description-tag">
                            {event && event.description !== undefined ? event.description : "No Description"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Row className="event-form">
                      <Col xs={12}>
                        <div className="mb-3">
                          <Form.Label className="form-label">Type</Form.Label>
                          <select
                            className={!!isEdit ? "form-select d-none" : "form-select d-block"}
                            name="category"
                            id="event-category"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.category || ""}>
                            <option value="bg-danger-subtle">Danger</option>
                            <option value="bg-success-subtle">Success</option>
                            <option value="bg-primary-subtle">Primary</option>
                            <option value="bg-info-subtle">Info</option>
                            <option value="bg-dark-subtle">Dark</option>
                            <option value="bg-warning-subtle">Warning</option>
                          </select>
                          {validation.touched.category && validation.errors.category ? (
                            <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.category}</Form.Control.Feedback>
                          ) : null}
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Form.Label className="form-label">Event Name</Form.Label>
                          <Form.Control
                            className={!!isEdit ? "d-none" : "d-block"}
                            placeholder="Enter event name"
                            type="text"
                            name="title"
                            id="event-title"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.title || ""} />
                          {validation.touched.title && validation.errors.title ? (
                            <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.title}</Form.Control.Feedback>)
                            : null}
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Form.Label>Event Date</Form.Label>
                          <div
                            className="input-group"
                          >
                            <Flatpickr
                              data-enable-time
                              className="form-control"
                              name="defaultDate"
                              value={validation.values.defaultDate || []}
                              options={{
                                mode: "range",
                                dateFormat: "Y-m-d",
                              }}
                              onChange={(date: any) => {
                                setSelectedNewDay(date);
                                validation.setFieldValue("defaultDate", date)
                              }}
                            />
                            <span className="input-group-text">
                              <i className="ri-calendar-event-line"></i>
                            </span>
                          </div>
                          {validation.touched.defaultDate && validation.errors.defaultDate ? (
                            <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.defaultDate} </Form.Control.Feedback>
                          ) : null}
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-3">
                          <Form.Label>Start Time</Form.Label>
                          <div className="input-group">
                            <Flatpickr className="form-control"
                              name="start"
                              value={validation.values.start || ""}
                              onChange={(date: any) => validation.setFieldValue("start", date[0])}
                              options={{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: "H:i",
                              }} />
                            <span className="input-group-text"> <i className="ri-calendar-event-line"></i> </span>
                          </div>
                          {validation.touched.start && validation.errors.start ? (
                            <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.start} </Form.Control.Feedback>
                          ) : null}
                        </div>
                      </Col>

                      <Col xs={6}>
                        <div className="mb-3">
                          <Form.Label>End Time</Form.Label>
                          <div className="input-group">
                            <Flatpickr className="form-control input-group"
                              name="end"
                              value={validation.values.end || ""}
                              onChange={(date: any) => validation.setFieldValue("end", date[0])}
                              options={{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: "H:i",
                              }} />
                            <span className="input-group-text"> <i className="ri-calendar-event-line"></i> </span>
                          </div>
                          {validation.touched.end && validation.errors.end ? (
                            <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.end} </Form.Control.Feedback>
                          ) : null}
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Form.Label htmlFor="event-location">Location</Form.Label>
                          <div>
                            <Form.Control
                              type="text"
                              className={!!isEdit ? "d-none" : "d-block"}
                              name="location"
                              id="event-location"
                              placeholder="Event location"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.location} />
                            {validation.touched.location && validation.errors.location ? (
                              <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.location}</Form.Control.Feedback>
                            ) : null}
                          </div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Form.Label className="form-label">Description</Form.Label>
                          <Form.Control as="textarea"
                            className={!!isEdit ? "form-control d-none" : "form-control d-block"}
                            id="event-description"
                            name="description"
                            placeholder="Enter a description"
                            rows={3}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.description} />
                          {validation.touched.description && validation.errors.description ? (
                            <Form.Control.Feedback type="invalid" className="d-block">{validation.errors.description}</Form.Control.Feedback>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <div className="hstack gap-2 justify-content-end">
                      {!!isEdit && (
                        <button type="button" className="btn btn-soft-danger" id="btn-delete-event" onClick={() => { toggle(); setDeleteModal(true) }}>
                          <i className="ri-close-line align-bottom"></i> Delete
                        </button>
                      )}
                      {isEditButton &&
                        <button type="submit" className="btn btn-success" id="btn-save-event">
                          {!!isEdit ? "Edit Event" : "Add Event"}
                        </button>}
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

MonthGrid.propTypes = {
  events: PropTypes.any,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
};
MonthGrid.layout = (page: any) => <Layout children={page} />
export default MonthGrid;