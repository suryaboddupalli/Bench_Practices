import React from 'react'
import { Route, Switch } from 'react-router-dom';
import UserDetails from "../Components/Candidate/UserDetails";
import AptitudePage from "../Components/Questions/Aptitude/AptitudePage";
import Technical from "../Components/Questions/Technical/Techinal";
import VerbalPage from "../Components/Questions/Verbal/VerbalPage";
import TermsAndCondtions from "../Components/TestSummary/TermsAndConditions";
import TestSummary from "../Components/TestSummary/TestSummary";

export default function IndexRoute() {
    return (
        <Switch>
            <Route path='/' component={UserDetails} />
            <Route path='/summary' component={TestSummary} />
            <Route path='/instuctions' component={TermsAndCondtions} />
            <Route path='/aptitude' component={AptitudePage} />
            <Route path='/verbal' component={VerbalPage} />
            <Route path='/technical' component={Technical} />
        </Switch>
    );
}


