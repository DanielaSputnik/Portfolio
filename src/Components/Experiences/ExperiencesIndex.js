import React from 'react'
import { ExpTLSubTitle, ExpTLYear, ExpTLTitle, ExpContainer, ExpTLItem, ExpWrapper, ExpHeading  } from './ExpElements'

const Experiences = () => {
    return (
    <>
        <ExpContainer id='experiences'>
        <ExpHeading>Experience</ExpHeading>
        <ExpWrapper>
                    
            <ExpTLYear>2022</ExpTLYear>
            <ExpTLItem>
                <ExpTLTitle>Front End</ExpTLTitle>
                <ExpTLSubTitle>Self study with focus on JS, React and NodeJS</ExpTLSubTitle>
            </ExpTLItem>
                    
            <ExpTLItem>
                <ExpTLTitle>Data Analyst at EY</ExpTLTitle>
                <ExpTLSubTitle>Development of reports using SQL, Tableau, Jira & Snowflake</ExpTLSubTitle>
            </ExpTLItem>
            <ExpTLYear>2021</ExpTLYear>
            <ExpTLItem>
                <ExpTLTitle>Python Course & Data Academy</ExpTLTitle>
                <ExpTLSubTitle>At ENGETO Academy in Brno  </ExpTLSubTitle>
            </ExpTLItem>
            
            
            <ExpTLItem>
                        <ExpTLTitle>AP Accountant at Lear Corp.</ExpTLTitle>
                <ExpTLSubTitle>Stress work work stress</ExpTLSubTitle>
            </ExpTLItem>
            <ExpTLYear>2020</ExpTLYear>       
            
            <ExpTLItem>
                <ExpTLTitle>Finished Master's Degree</ExpTLTitle>
                <ExpTLSubTitle>At Commenius University in Bratislava in Chinese Language Studies </ExpTLSubTitle>
            </ExpTLItem>
                    
            <ExpTLItem>
                <ExpTLTitle>Huawei</ExpTLTitle>
                <ExpTLSubTitle>Internship</ExpTLSubTitle>
                    </ExpTLItem>
            <ExpTLYear>2018</ExpTLYear>
        </ExpWrapper>
    </ExpContainer>
    </>
    )
}

export default Experiences
