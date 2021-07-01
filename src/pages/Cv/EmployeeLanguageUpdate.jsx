import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import *as Yup from "yup"
import { toast } from 'react-toastify';
import { Button, Form, Grid, GridColumn, Label, Modal, Icon } from 'semantic-ui-react'
import EmployeeCvService from '../../services/employeeCvService'
import { useParams } from 'react-router'
import EmployeeSchoolService from '../../services/employeeSchoolService'
export default function EmployeeLanguageUpdate({employeeCv}) {
    
    const [employeeLanguage, setEmployeeSchool] = useState({});

    let employeeLanguageService=new EmployeeSchoolService();

    useEffect(() => {
    
    employeeLanguageService.getAllEmployeeCvId(2).then((result)=>setEmployeeSchool(result.data.data));
    
  
    },[]);
    
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            id:employeeCv?.id,
            employeeCv:employeeCv?.employeeCvId.id,
            language: employeeLanguage?.language,
            level:employeeLanguage?.level,
         
        },
        validationSchema:
            Yup.object({
                language: Yup.string().required("Dil ismi boş bırakalımaz!"),
                level: Yup.number().required("Dil seviyenizi girmelisiniz!"),
            }),
            onSubmit: (values) => {
                
              employeeLanguageService.update(values)
              toast.success("Eğitim güncellendi");
            }
        });
        return (<div>
             <Modal
              
                trigger={<Button floated="right" color="blue" style={{ marginBottom: ".5em", marginRight: ".5em" }}><Icon name="add"></Icon>Güncelle</Button>}
            >  
                <Modal.Header>Eğitim Ekle</Modal.Header>
                <Modal.Description>
                   
                <Form onSubmit={handleSubmit} style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}>
                        <Grid stackable>
                            <GridColumn width={14}>
                                <Form.Field>
                                    <label>Dil Adı</label>
                                    <input name="schoolName" placeholder='Okul Adı' value={values.language} onChange={handleChange} />
                                    {
                                        errors.language && touched.language &&
                                        <Label basic color='red' pointing>
                                            {errors.languagee}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Dil Seviyesi</label>
                                    <input name="schoolDepartment" placeholder='Bölüm Adı' value={values.level} onChange={handleChange} />
                                    {
                                        errors.level && touched.level &&
                                        <Label basic color='red' pointing>
                                            {errors.level}
                                        </Label>
                                    }
                               </Form.Field>
                            </GridColumn>
                        </Grid>
                        <Modal.Actions>
                        
                            <Button type='submit' color="teal" style={{ marginLeft: "22em", marginTop: "1em" }}>EKLE</Button>
                        </Modal.Actions>
                        </Form>
                </Modal.Description>
            </Modal>
        </div>)
       
}
