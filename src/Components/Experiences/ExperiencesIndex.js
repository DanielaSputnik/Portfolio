import React from 'react'
import { ExpTLSubTitle, ExpTLYear, ExpTLTitle, ExpContainer, ExpTLItem, ExpWrapper, ExpHeading  } from './ExpElements'

const Experiences = () => {
    return (
    <>
        <ExpContainer id='experiences'>
        <ExpHeading>Experiences</ExpHeading>
        <ExpWrapper>
                    
            <ExpTLYear>2022</ExpTLYear>
            <ExpTLItem>
                <ExpTLTitle>Front End Development Self Studies</ExpTLTitle>
                <ExpTLSubTitle>Completed several courses on Pluralsight with focus on JS & React.</ExpTLSubTitle>
            </ExpTLItem>
                    
            <ExpTLItem>
                <ExpTLTitle>Data Analyst at EY</ExpTLTitle>
                <ExpTLSubTitle>Development and maintenance of Key Risk Indicator reports using T-SQL, Tableau, Jira & Snowflake.</ExpTLSubTitle>
            </ExpTLItem>
            <ExpTLYear>2021</ExpTLYear>
            <ExpTLItem>
                <ExpTLTitle>Python Course & Data Academy</ExpTLTitle>
                <ExpTLSubTitle>Attended ENGETO Academy courses in Brno  </ExpTLSubTitle>
            </ExpTLItem>
            
            
            <ExpTLItem>
                        <ExpTLTitle>AP Accountant at Lear Corp.</ExpTLTitle>
                <ExpTLSubTitle>Overseen the AP invoicing processes.</ExpTLSubTitle>
            </ExpTLItem>
            <ExpTLYear>2020</ExpTLYear>       
            
            <ExpTLItem>
                <ExpTLTitle>Finished Master's Degree</ExpTLTitle>
                <ExpTLSubTitle>In Chinese Language Studies at Commenius University in Bratislava </ExpTLSubTitle>
            </ExpTLItem>
                    
            <ExpTLItem>
                <ExpTLTitle>Internship at Huawei s.r.o</ExpTLTitle>
                <ExpTLSubTitle>Creation and analysis of purchase/procurement orders</ExpTLSubTitle>
                    </ExpTLItem>
            <ExpTLYear>2018</ExpTLYear>
        </ExpWrapper>
    </ExpContainer>
    </>
    )
}

export default Experiences
