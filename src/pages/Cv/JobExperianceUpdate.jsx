import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import *as Yup from "yup"
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Button, Form, Grid, GridColumn, Label, Modal, Icon } from 'semantic-ui-react'
import JobExperianceService from '../../services/jobExperience'
import { useParams } from 'react-router'

export default function JobExperianceUpdate({employeeCv}) {
    
    const [jobExperiance, setJobExperiance] = useState([]);

    let jobExperianceService=new JobExperianceService();

    useEffect(() => {
    
       jobExperianceService.getAllByEmployeeCvId(2).then((result)=>setJobExperiance(result.data.data))
    
    },[]);
    console.log(jobExperiance)
    
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            id:jobExperiance[0]?.id,
            employeecvId:employeeCv?.employee?.id,
            jobplaceName:jobExperiance[0]?.jobplaceName,
            position: jobExperiance[0]?.position,
            jobDetail:jobExperiance[0]?.jobDetail,
            createDate: jobExperiance[0]?.createDate,
            startDate:jobExperiance[0]?.startDate,
            finishDate:jobExperiance[0]?.finishDate,
        },
        enableReinitialize:true,
        validationSchema:
            Yup.object({
                jobplaceName: Yup.string().required("İş adı boş bırakılamaz!"),
                position: Yup.string().required("Pozisyon boş bırakılamaz!"),
                createdDate: Yup.date().required("boş bırakılamaz!"),
                startDate: Yup.date().required("Başlama tarihi bos bırakılamaz!"),
                finishDate: Yup.date(),
                jobDetail: Yup.string().required("iş boş bırakılamaz!"),
            }),
            onSubmit: (values) => {
                
              jobExperianceService.update(values)
              toast.success("İş deneyimi eklendi");
            }
        });
        console.log(values)
        return (<div>    <ToastContainer position="bottom-right"/>
             <Modal
              
                trigger={<Button floated="right" color="blue" style={{ marginBottom: ".5em", marginRight: ".5em" }}><Icon name="add"></Icon>Güncelle</Button>}
            >  
                <Modal.Header>İş Deneyimi Güncelle</Modal.Header>
                <Modal.Description>
                    <Form onSubmit={handleSubmit} style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}>
                        <Grid stackable>
                            <GridColumn width={14}>
                                <Form.Field>
                                    <label>İş Adı</label>
                                    <input name="jobplaceName" placeholder='İş Adı' value={values.jobplaceName} onChange={handleChange} />
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
                                    <input name="position" placeholder='position' value={values.position} onChange={handleChange} />
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
                                    <label>İş Detayı</label>
                                    <input name="jobDetail" placeholder='İş Detayı' value={values.jobDetail} onChange={handleChange} />
                                    {
                                        errors.jobDetail && touched.jobDetail &&
                                        <Label basic color='red' pointing>
                                            {errors.jobDetail}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                             <GridColumn width={7}>
                                <Form.Field>
                                    <label>Derece</label>
                                    <input name="createdDate" placeholder='oluşum tarihi' value={values.createdDate} onChange={handleChange} />
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
