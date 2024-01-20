import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Main from './Main';
import AddCode from '../SourceCodeUpload/AddCode';
import AddRecommend from '../SourceCodeUpload/AddRecommend';
import AddInterviewQuestions from '../SourceCodeUpload/AddInterviewQuestions';
import AddBlogs from '../SourceCodeUpload/AddBlogs';
import AddCourse  from '../SourceCodeUpload/AddCourse';
// import AddCode from '../../components/RelatedPost';
// import AddRecommend from '../../components/RecommendationList'; 
import Code from '../../pages/code';  

export default function Tabs(props) {
  const dbData = props.data;
  
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
    <div className="tab_class">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' , color: 'black'}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Dashboard" value="1" />
              <Tab label="Add Source Code" value="2" />
              <Tab label="Source code" value="3" />
              <Tab label="Add Recommendation" value="4" />
              <Tab label="Add Questions" value="5" />
              <Tab label="Add Blogs" value="6" />
              <Tab label="Add Course" value="7" />

            </TabList>
          </Box>
          <TabPanel value="1"><Main data={dbData}/></TabPanel>
          <TabPanel value="2"><AddCode/></TabPanel>
          <TabPanel value="3"><Code/></TabPanel>
          <TabPanel value="4"><AddRecommend/></TabPanel>
          <TabPanel value="5"><AddInterviewQuestions/></TabPanel>
          <TabPanel value="6"><AddBlogs/></TabPanel>
          <TabPanel value="7"><AddCourse/></TabPanel>
        </TabContext>
      </Box>
      </div>
      <style jsx>
        {`
        .tab_class{
            margin-top: 60px;
        
        } 
        
        .Tab > label{
            text-transform: capitalize;
        }
        `}
      </style>
      </>
    );
  }
  
