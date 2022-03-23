import React from 'react';
import Background from './Background';
import { Box } from '@mui/material';
import ProjectCard from './ProjectCard';

function App() {
  return(
    <Background
      mainElement={
        <Box sx={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          }}>
          <ProjectCard
            name="Household Study Web Scraper"
            description="Python script developed for the Global Poverty Research
            Lab at Northwestern University. The definition of 'household'
            varies between surveys but can have potentially significant implications
            for household composition, production, and poverty statistics. This
            scraper pulls and organizes survey information, results, and metadata
            to examine relationships between the definition of household used
            and the results of said survey. Built using Python, relying on the
            BeautifulSoup and Selenium packages."
            link="https://github.com/haydenudelson/Household-Study-Web-Scraper"
            />
          <ProjectCard
            name="Project Eve"
            description="Team-driven web app created with small team while
            interning at Connexta. Project Eve displays important information
            for both the office and for each project team. It includes differnt
            widgets that can be mixed and matched to fit a given team's needs
            and the information within each widget can also be customized.
            Built using ReactJS and NodeJS."
            link="https://github.com/connexta/eve"
            />
          <ProjectCard
            name="Personalize The News"
            description="Web app created for the Knight Lab Studio at
            Northwestern University, a collaboration between journalism and
            computer science students. The web app alters the news article
            based on demographic data provided by the user, as a proof of
            concept for news personalization. This web app was deployed on
            Amazon Mechanical Turk as part of an academic study on the effects
            of news personalization. Built using Jupyter Notebook and HTML."
            link="https://nuknightlab.github.io/studio-personal-story/"
            />
          <ProjectCard
            name="Find A Time"
            description="Web app created with small team in Agile framework. Find
            A Time is a tool to find common availability between colleagues by
            importing Google Calendar schedule and displaying how many colleagues
            are available at each time slot over a given period of time. Created
            using ReactJS and NodeJS."
            link="https://github.com/cs394-w20/find-a-time"
            />
          <ProjectCard
            name="FAB"
            description="Mobile web app where users can post pictures of two
            outfits and a community of users can provide feedback on which
            looks better. Built using React Native."
            link="https://github.com/cs394-w20/fab"
            />
        </Box>

      }
    />
  );
}

export default App;
