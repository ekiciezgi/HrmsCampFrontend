

import JobNoticeService from "../services/jobNoticeService";
import positionService from "../services/positionsService";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../services/cityService";
import WorkTimeService from "../services/workTimeService";
import WorkPlaceService from "../services/workPlaceService";


export default function JobNoticeAdd() {
  const history = useHistory()
    let jobAdService = new JobNoticeService();
  const JobAdvertAddSchema = Yup.object().shape({
    applicationDeadLine: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    positionId: Yup.number().required("Bu alanın doldurulması zorunludur"),
    workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    openPositionCount: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
    maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      positionId: "",
      workTimeId: "",
      workPlaceId: "",
      openPositionCount: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      applicationDeadLine: "",
      workPlaceId:"",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      values.employerId = 1;
      jobAdService.add(values).then((result) => result);
      alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
      // history.push("/jobNoticeList");
    },
  });
const [jobAdd, setJobAdd] = useState({})
  const [workTimes, setWorkTimes] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let workTimeService = new WorkTimeService();
    let workPlaceService = new WorkPlaceService();
    let cityService = new CityService();
    let jobPositionService = new positionService();

    workTimeService.getWorkTimes().then((result) => setWorkTimes(result.data.data));
    workPlaceService.getWorkPlaces().then((result) => setWorkPlaces(result.data.data));
    cityService.getCity().then((result) => setCities(result.data.data));
    jobPositionService. getPositions().then((result) => setJobPositions(result.data.data));
  }, []);

  const workTimeOption = workTimes.map((workTime, index) => ({
     key: index,
    text: workTime.name,
     value: workTime.id,
   }));
   const workPlaceOption = workPlaces.map((workPlace, index) => ({
     key: index,
     text: workPlace.name,
    value: workPlace.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.cityId,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.positionName,
    value: jobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
      <Card.Content  ><h1>İŞ İLANI EKLE</h1></Card.Content>
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "positionId")
          }
          onBlur={formik.onBlur}
          id="positionId"
          value={formik.values.positionId}
          options={jobPositionOption}
          />
          {formik.errors.positionId && formik.touched.positionId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.positionId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
           <Form.Field>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workPlaceId")
                  }
                  onBlur={formik.onBlur}
                  id="workPlaceId"
                 value={formik.values.workPlaceId}
                 options={workPlaceOption}
                />
                {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workPlaceId}
                  </div>
                )}
          </Form.Field>
           <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workTimeId"
                  value={formik.values.workTimeId}
                  options={workTimeOption}
                />
                {formik.errors.workTimeId && formik.touched.workTimeId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workTimeId}</div>
                )}
              </Form.Field> 
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  id="openPositionCount"
                  name="openPositionCount"
                  error={Boolean(formik.errors.openPositionCount)}
                  onChange={formik.handleChange}
                  value={formik.values.openPositionCount}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Posisyon sayısı"
                />
                {formik.errors.openPositionCount && formik.touched.openPositionCount && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositionCount}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors. applicationDeadLine)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value,"applicationDeadLine")
                  }
                  value={formik.values. applicationDeadLine}
                  onBlur={formik.handleBlur}
                  name="applicationDeadLine"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors. applicationDeadLine && formik.touched.applicationDeadLine && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadLine}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>)
}
