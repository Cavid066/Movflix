import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UpcomingSlider from '../UpcomingSlider/UpcomingSlider';
import { useSelector, useDispatch } from 'react-redux';
import '../Upcoming/upcoming.scss'
import { getCategoriesAction } from '../../redux/actions/CategoriesAction';
function Upcoming() {

  const [value, setValue] = useState(0)

  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch()

  console.log(categories);

  useEffect(() => {
    dispatch(getCategoriesAction())
  }, [])

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className='upcoming'>
      <div className="upcoming__container">
        <div className="upcoming__container__top">
          <div className='upcoming__container__top__text'>
            <p>ONLINE STREAMING</p>
            <h1>Upcoming Movies</h1>
          </div>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              {
                categories &&
                categories.map((category, key) => (
                  <Tab key={key} label={category.name} />
                ))
              }
            </Tabs>
          </Box>
        </div>
        {
          categories &&
          categories.map((category, key) => (
            <TabPanel value={value} index={key}>
              <UpcomingSlider category={category.name} />
            </TabPanel>
          ))
        }

      </div>
    </div>
  )
}

export default Upcoming