import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import *as Yup from "yup"
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Button, Form, Grid, GridColumn, Label, Modal, Icon } from 'semantic-ui-react'

import { useParams } from 'react-router'
import JobExperianceService from '../../services/jobNoticeService'
export default function JobExperianceUpdate({employeeCv}) {
    
    const [jobExperiance, setJobExperiance] = useState({});

    let jobExperianceService=new JobExperianceService();

    useEffect(() => {
    
        jobExperianceService.getAllEmployeeCvId(2).then((result)=>setJobExperiance(result.data.data));
    
  
    },[]);
    
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            id:employeeCv?.id,
            employeeCv:employeeCv?.employeeCvId.id,
            jobplaceName:jobExperiance?.jobplaceName ,
            position: jobExperiance?.position,
            createdDate: jobExperiance?.createdDate,
            startDate:jobExperiance?.startDate,
            finishDate:jobExperiance?.finishDate,
        },
        validationSchema:
            Yup.object({
                jobplaceName: Yup.string().required("İş adı boş bırakılamaz!"),
                position: Yup.string().required("Pozisyon boş bırakılamaz!"),
                createdDate: Yup.date().required("boş bırakılamaz!"),
                startDate: Yup.date().required("Başlama tarihi bos bırakılamaz!"),
                finishDate: Yup.date()
            }),
            onSubmit: (values) => {
                
              jobExperianceService.update(values)
              toast.success("İş deneyimi eklendi");
            }
        });
        return (<div>    <ToastContainer position="bottom-right"/>
             <Modal
              
                trigger={<Button floated="right" color="blue" style={{ marginBottom: ".5em", marginRight: ".5em" }}><Icon name="add"></Icon>Güncelle</Button>}
            >  
                <Modal.Header>Eğitim Ekle</Modal.Header>
                <Modal.Description>
                    <Form onSubmit={handleSubmit} style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}>
                        <Grid stackable>
                            <GridColumn width={14}>
                                <Form.Field>
                                    <label>İş Adı</label>
                                    <input name="jobplaceName" placeholder='Okul Adı' value={values.jobplaceName} onChange={handleChange} />
                                    {
                                        errors.jobplaceName && touched.jobplaceName &&
                                        <Label basic color='red' pointing>
                                            {errors.jobplaceName }
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Pozisyon Adı</label>
                                    <input name="position" placeholder='Bölüm Adı' value={values.position} onChange={handleChange} />
                                    {
                                        errors.position && touched.position &&
                                        <Label basic color='red' pointing>
                                            {errors.position}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Derece</label>
                                    <input name="createdDate" placeholder='Mezuniyet yılı' value={values.createdDate} onChange={handleChange} />
                                    {
                                        errors.createdDate && touched.createdDate &&
                                        <Label basic color='red' pointing>
                                            {errors.createdDate}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Başlama Tarihi</label>
                                    <input name="startDate" type="date" value={values.startDate} onChange={handleChange} />
                                    {
                                        errors.startDate && touched.startDate &&
                                        <Label basic color='red' pointing>
                                            {errors.startDate}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Bitiş Tarihi</label>
                                    <input name="finishDate" type="date" value={values.finishDate} onChange={handleChange} />
                                    {
                                        errors.finishDate && touched.finishDate &&
                                        <Label basic color='red' pointing>
                                            {errors.finishDate}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                        </Grid>
                        <Modal.Actions>
                            <Button type='submit' color="teal" style={{ marginLeft: "22em", marginTop: "1em" }}>GÜNCELLE</Button>
                        </Modal.Actions>
                    </Form>
                </Modal.Description>
            </Modal>
        </div>)
       
}
