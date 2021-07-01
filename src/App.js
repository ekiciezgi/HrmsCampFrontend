
import './App.css';
import JobNoticeAdd from './pages/JobNoticeAdd';
import JobDetail from './pages/JobDetail';
import EmployeeCvList from './pages/EmployeeCvList'
import JobNoticeList from './pages/JobNoticeList'
import EmployersList from './pages/EmployersList'
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Home from './layouts/Home';
import FavoriJob from './pages/FavoriJob';
import EmployeeSchoolUpdate from './pages/Cv/EmployeeSchoolUpdate';
import EmployeeSchoolAdd from './pages/Cv/EmployeeSchoolAdd';
import EmployeeLanguageAdd from './pages/Cv/EmployeeLanguageAdd';
import EmployeeLanguageUpdate from './pages/Cv/EmployeeLanguageUpdate';
import EmployeeCvCard from './pages/EmployeeCvCard';

function App() {
  return (
    <>
     <Router>
      <Navi/>
       <Switch>
               <Route path='/' exact component={Home} />
               <Route exact path="/employeeCv" component={EmployeeCvList} />
               <Route exact path="/employee" component={EmployersList} />
               <Route exact path="/jobNoticeList" component={JobNoticeList} />
               <Route exact path="/jobNoticeAdd" component={JobNoticeAdd} />
               <Route exact path="/jobDetail/:id" component={JobDetail} />
               <Route exact path="/homePage" component={Dashboard} />
               <Route exact path="/favoriJob" component={FavoriJob} />
               <Route exact path="/employeeCvCard" component={EmployeeCvCard} />
               {/* <Route exact path="/employeeSchoolAdd" component={EmployeeSchoolAdd} />
               <Route exact path="/employeeSchoolUpdate" component={EmployeeSchoolUpdate} />
               <Route exact path="/employeeLanguageAdd" component={EmployeeLanguageUpdate} />
               <Route exact path="/employeeLanguageUpdate" component={EmployeeLanguageAdd} /> */}
       </Switch>
      </Router>
    </>


//     <div className="App" style={{background: "#F2F0F2"}} >
//       <Navi/>
//       <Home></Home>
// <div ></div>
//     <Home></Home>
//       <Container className="main">
//       <Dashboard/>
//       </Container>
     
    
      
  
//     </div>
  );
}

export default App;
