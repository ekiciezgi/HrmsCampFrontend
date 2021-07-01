import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import *as Yup from "yup"
import { toast } from 'react-toastify';
import { Button, Form, Grid, GridColumn, Label, Modal, Icon } from 'semantic-ui-react'
import EmployeeCvService from '../../services/employeeCvService'
import { useParams } from 'react-router'
import EmployeeSchoolService from '../../services/employeeSchoolService'
export default function EmployeeSchoolUpdate({ education }) {
    
    const [employeeSchool, setEmployeeSchool] = useState([]);

    let employeeSchoolService=new EmployeeSchoolService();
   useEffect(() => {
      employeeSchoolService.getAllByEmployeeCvId(2).then((result)=>setEmployeeSchool(result.data.data))
   }, {})

    //console.log(employeeSchool)
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            id:employeeSchool[0]?.id,
            employeeCvId:education?.employee?.id,
            schoolName: employeeSchool[0]?.schoolName,
            schooldepartment:employeeSchool[0]?.schooldepartment,
            graduationYear:employeeSchool[0]?.graduationYear,
            startDate:employeeSchool[0]?.startDate,
            finishDate:employeeSchool[0]?.finishDate,
           
        },
      
        enableReinitialize:true,
        validationSchema:
            Yup.object({
                schoolName: Yup.string().required("Okul adı boş bırakılamaz!"),
                 schooldepartment: Yup.string().required("Bölüm boş bırakılamaz!"),
                 graduationYear: Yup.date().required("Mezuniyet yılı boş bırakılamaz!"),
                 startDate: Yup.date().required("Başlama tarihi bos bırakılamaz!"),
                 finishDate: Yup.date()
            }),
            onSubmit: (values) => {
            
              
              employeeSchoolService.update(values)
              toast.success("Eğitim güncellendi");
            }
        });
        //console.log(values)
        return (<div>
             <Modal
              
                trigger={<Button floated="right" color="blue" style={{ marginBottom: ".5em", marginRight: ".5em" }}><Icon name="add"></Icon>Güncelle</Button>}
            >  
                <Modal.Header>GÜNCELLE</Modal.Header>
                <Modal.Description>
                    <Form onSubmit={handleSubmit} style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}>
                        <Grid stackable>
                            <GridColumn width={14}>
                                <Form.Field>
                                    <label>Okul Adı</label>
                                    <input name="schoolName" placeholder='Okul Adı' value={values.schoolName} onChange={handleChange} />
                                    {
                                        errors.schoolName && touched.schoolName &&
                                        <Label basic color='red' pointing>
                                            {errors.schoolName}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Bölüm Adı</label>
                                    <input name="schooldepartment" placeholder='Bölüm Adı' value={values.schooldepartment} onChange={handleChange} />
                                    {
                                        errors.schooldepartment && touched.schooldepartment &&
                                        <Label basic color='red' pointing>
                                            {errors.schoolDepartment}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Derece</label>
                                    <input name="graduationYear" placeholder='Mezuniyet yılı' value={values.graduationYear} onChange={handleChange} />
                                    {
                                        errors.graduationYear && touched.graduationYear &&
                                        <Label basic color='red' pointing>
                                            {errors.graduationYear}
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
                        
                            <Button type='submit' color="teal" style={{ marginLeft: "22em", marginTop: "1em" }}>Güncelle</Button>
                        </Modal.Actions>
                    </Form>
                </Modal.Description>
            </Modal>
        </div>)
       
}
