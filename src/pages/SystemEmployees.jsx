import React from 'react'

export default function SystemEmployees() {

    const [systemEmployees, setsystemEmployees] = useState([])

    let systemEmployeesService=new SystemEmployeesService();
   useEffect(() => {
    systemEmployeesService.getByUserId(2).then((result)=>setsystemEmployees(result.data.data))
   }, {})
    return (
        <div>  <Card.Group>
              
        <Card fluid color="teal" >
            <Card.Content>
            <Grid>
            <Grid.Column width={5}>
                <Image floated="left" size="medium" src={cv?.imageUrl} />
                </Grid.Column>
                <Card.Header>{cv?.firstName} {cv?.lastName}</Card.Header>
                <Grid.Column width={11}>
                        <Card.Header><h2>{cv?.firstName} {cv?.lastName}</h2></Card.Header>
       
                        <Card.Description style={{ marginTop: ".5em" }}><a href={cv?.githubLink} target="_blank" style={{ color: "black" }}><Icon name="github" size="big" /><b>Github</b></a></Card.Description>
                        <Card.Description style={{ marginTop: ".5em" }}><a href={cv?.linkedinLink} target="_blank" style={{ color: "black" }}><Icon name="linkedin" color="blue" size="big" /><b>Linkedin</b></a></Card.Description>
                    </Grid.Column>
                    </Grid>
                <Card.Description>
                    {cv?.coverLetter}
                    <Card fluid style={{ marginTop: "1em" }} color="red">
                        <Card.Content header='Kişisel Bilgiler' />
                        <Card.Content><b>Adı: </b>{cv?.employee.firstName}</Card.Content>
                        <Card.Content><b>Soyadı: </b>{cv?.employee.lastName}</Card.Content>
                        <Card.Content><b>Doğum Yılı: </b>{cv?.employee.birthday}</Card.Content>
                        <Card.Content><b>Email: </b>{cv?.employee.email}</Card.Content>
                    </Card> 
                    
                    </Card.Description>
                        </Card.Content>  
                        <Card.Content extra>
                            <div className="ui two buttons"> </div>
                                <Button color="teal">
                                    Güncelle
                                </Button>
                            
                        </Card.Content>
                    </Card> 
               
            </Card.Group>
        </div>
    )
}
