import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import *as Yup from "yup"
import { toast } from 'react-toastify';
import { Button, Form, Grid, GridColumn, Label, Modal, Icon } from 'semantic-ui-react'

export default function EmployeeSchoolUpdate({user}) {
    
const [systemEmployees, setsystemEmployees] = useState([])

    let systemEmployeesService=new SystemEmployeesService();
   useEffect(() => {
    systemEmployeesService.getByUserId(2).then((result)=>setsystemEmployees(result.data.data))
   }, {})
    //console.log(employeeSchool)
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            id:systemEmployees[0]?.id,
            userId:user?.userId?.id,
            firstName: systemEmployees[0]?.firstName,
            lastName:systemEmployees[0]?.lastName
        },
      
        enableReinitialize:true,
        validationSchema:
            Yup.object({
                firstName: Yup.string().required("Ad boş bırakılamaz!"),
                lastName: Yup.string().required("Soy ad boş bırakılamaz!"),
             
            }),
            onSubmit: (values) => {
            
              
              employeeSchoolService.update(values)
              toast.success("Eğitim güncellendi");
            }
        });
       // console.log(values)
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
                                    <input name="firstName" placeholder='Okul Adı' value={values.firstName} onChange={handleChange} />
                                    {
                                        errors.firstName && touched.firstName &&
                                        <Label basic color='red' pointing>
                                            {errors.firstName}
                                        </Label>
                                    }
                                </Form.Field>
                            </GridColumn>
                            <GridColumn width={7}>
                                <Form.Field>
                                    <label>Bölüm Adı</label>
                                    <input name="lastName" placeholder='Bölüm Adı' value={values.lastName} onChange={handleChange} />
                                    {
                                        errors.lastName && touched.lastName &&
                                        <Label basic color='red' pointing>
                                            {errors.lastName}
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
