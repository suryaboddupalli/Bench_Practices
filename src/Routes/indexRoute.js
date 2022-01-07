import React from 'react'
import { Route, Switch } from 'react-router-dom';
import UserDetails from "../Components/Candidate/UserDetails";
import AptitudePage from "../Components/Questions/Aptitude/AptitudePage";
import Technical from "../Components/Questions/Technical/Techinal";
import VerbalPage from "../Components/Questions/Verbal/VerbalPage";
import Instructions from "../Components/TestSummary/Instructions";
import TestSummary from "../Components/TestSummary/TestSummary";
import Results from '../Components/Results/Results';

export default function IndexRoute() {
    return (
        <Switch>
            <Route path='/' component={UserDetails} exact/>
            <Route path='/summary' component={TestSummary} exact />
            <Route path='/instructions' component={Instructions} exact />
            <Route path='/aptitude' component={AptitudePage} exact />
            <Route path='/verbal' component={VerbalPage} exact />
            <Route path='/technical' component={Technical}  exact/>
            <Route path='/result' component={Results} exact />
        </Switch>
    );
}


