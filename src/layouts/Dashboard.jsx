
import { Grid, GridColumn,Container,Image} from 'semantic-ui-react'
import EmployeeCvList from '../pages/EmployeeCvList'
import JobNoticeList from '../pages/JobNoticeList'
import EmployersList from '../pages/EmployersList'
import { Route } from "react-router";
import SideBar from './SideBar'
import JobNoticeAdd from '../pages/JobNoticeAdd';
import JobDetail from '../pages/JobDetail';
import Footer from '../layouts/Footer';
import { Segment } from "semantic-ui-react";
export default function Dashboard() {
    return(

        <div  >
             <Grid>
            <Grid.Row >
               <GridColumn width={6}>
               <SideBar />
               </GridColumn>
               
               <GridColumn width={13}>
               <Route exact path="/employeeCv" component={EmployeeCvList} />
               <Route exact path="/employee" component={EmployersList} />
               <Route exact path="/jobNoticeList" component={JobNoticeList} />
               <Route exact path="/jobNoticeAdd" component={JobNoticeAdd} />
               <Route exact path="/jobDetail" component={JobDetail} />
             {/* <Image src='../images/İŞBUL.COM.png' style={{width:'100%',height:'85%',marginLeft:'26%',marginTop:'1%'}}></Image>  */}
               </GridColumn>
           </Grid.Row>
     
      
           </Grid>
        </div>
    );
    
}
