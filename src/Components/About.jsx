// import { StarBorder } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import about_logo from '../assets/about-image.jpg'
import './about.css'
import HistoryItem from './HistoryItem';
import { EmojiEmotionsSharp, Group, SchoolRounded, TravelExplore, Widgets } from '@mui/icons-material';
import frlogo from '../assets/fr.png'
import coldf from '../../public/cold_forged_manufacturing.jpg'
import advmtech from '../../public/advanced_machine_tech.jpg'
import fastprod from '../../public/fast_production_precision.jpg'
import supfinish from '../../public/Superior_Surface_Finish.jpg'
import shs from '../../public/Shorter_Lead_Time_&_Strength.jpg'

function About() {
  // let articles = [
  //   {
  //     "url": "../assets/cold_forged_tech.jpg",
  //     "title": "Cold Forged Manufacturing",
  //     "description": "Speed, strength, and improved properties through the Cold Forged method."
  //   },
  //   {
  //     "url": "",
  //     "title": "Advanced Machine Tech",
  //     "description": "Cutting-edge machinery for efficient and precise fastener manufacturing."
  //   },
  //   {
  //     "url": "",
  //     "title": "Fast Production & Precision",
  //     "description": "Efficient production with precise accuracy and unbroken grain flow."
  //   },
  //   {
  //     "url": "",
  //     "title": "Superior Surface Finish",
  //     "description": "Delivers top-quality surface finish using modern tool-room facilities."
  //   },
  //   {
  //     "url": "",
  //     "title": "Shorter Lead Time & Strength",
  //     "description": "Quick turnaround with increased strength in manufactured fasteners."
  //   }
  // ];
  let handleOpenpdf = () => {
    console.log('clicked')
  }


  // const [articlestate, setarticlestate] = useState(articles);
  return (
    <Container fixed sx={{ minWidth: '99vw', minHeight: '90vh' }}>
      <Grid container spacing={2} mt={2} >
        <Grid item xs={6}>
          <Typography variant='h2'>About US</Typography>
          <Typography variant='h6' mt={10} sx={{ textAlign: 'justify' }}>
            We are India’s premier manufacturers of Cold Forged Stainless Steel and Alloy Steel Fasteners. Our key point is Ex-Stock availability of more than 5000 types of fasteners. We have alliance with experienced RM mills & vendors, which allows us to deliver products on time and with 100% lot traceability. Our consistent, efficient and accurate system of manufacturing high quality products has gained us ISO 9001- 2008 certification. We are dedicated to Efficiency, Quality, Cost & Delivery (EQCD) principles to achieve l00% customer satisfaction.
          </Typography>
          <button id='pdf' onClick={handleOpenpdf}>Know More</button>
        </Grid>
        <Grid item xs={6}>
          <div className='hero-img'>
            <img src={about_logo} alt='Nuts&Bolts' />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant='h3' sx={{ textAlign: 'center' }}>Manufacturing Process</Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          {/* Hardcoded data for 5 cards */}
          <Card sx={{ minWidth: '15vw', marginRight: '2vw' }}>
            <HistoryItem
              title="Cold Forged Manufacturing"
              description="Speed, strength, and improved properties through the Cold Forged method."
              imageUrl={coldf}
            />
          </Card>

          <Card sx={{ minWidth: '15vw', marginRight: '2vw' }}>
            <HistoryItem
              title="Advanced Machine Tech"
              description="Cutting-edge machinery for efficient and precise fastener manufacturing."
              imageUrl={advmtech}
            />
          </Card>
          <Card sx={{ minWidth: '15vw', marginRight: '2vw' }}>
            <HistoryItem
              title="Fast Production & Precision"
              description="Efficient production with precise accuracy and unbroken grain flow."
              imageUrl={fastprod}
            />
          </Card>
          <Card sx={{ minWidth: '15vw', marginRight: '2vw' }}>
            <HistoryItem
              title="Superior Surface Finish"
              description="Delivers top-quality surface finish using modern tool-room facilities."
              imageUrl={supfinish}
            />
          </Card>
          <Card sx={{ minWidth: '15vw', marginRight: '2vw' }}>
            <HistoryItem
              title="Shorter Lead Time & Strength"
              description="Quick turnaround with increased strength in manufactured fasteners."
              imageUrl={shs}
            />
          </Card>

          {/* Repeat this pattern for the other 3 cards with their respective data */}
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant='h3' textAlign={'center'}>Quality Assurance</Typography>
          <Paper elevation={0}>
            <Typography variant='h6' sx={{ textAlign: 'justify' }}>
              We continuously improve our products and services to satisfy the need of our customers with timely delivery and zero defects. Providing products according to customers' specifications at reasonable price and ex-stock of wide range of fasteners develops a strong relationship with the customers and we are proud to say that the relationships have become healthier over the years. This is achieved with constant innovation, the best and latest technology along with the support of a very dedicated and skilled workforce
            </Typography>
          </Paper>
          <Button style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>Quality Certification</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <TravelExplore sx={{ fontSize: 40 }} />
          <Typography variant='h4'>7,100+</Typography>
          <Typography variant='h6'>employees in</Typography>
          <Typography variant='h4'>3</Typography>
          <Typography variant='h6'>global offices</Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <EmojiEmotionsSharp sx={{ fontSize: 40 }} />
          <Typography variant='h4'>184,000+</Typography>
          <Typography variant='h6'>customers in</Typography>
          <Typography variant='h4'>5+</Typography>
          <Typography variant='h6'>countries</Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <Widgets sx={{ fontSize: 40 }} />
          <Typography variant='h4'>20,000+</Typography>
          <Typography variant='h6'>integrations</Typography>
        </Grid>
      </Grid>
      <Grid container mt={3} spacing={2}>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <Group sx={{ fontSize: 40 }} />
          <Typography variant='h4'>150+</Typography>
          <Typography variant='h6'>FitRight UserGroups in </Typography>
          <Typography variant='h4'>28</Typography>
          <Typography variant='h6'>States of India</Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <img src={frlogo} alt='...' style={{ width: '90px' }} />
          <Typography variant='h4'>45,000+</Typography>
          <Typography variant='h6'>MetalMarket 2023</Typography>
          <Typography variant='h6'>registered attends</Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <SchoolRounded sx={{ fontSize: 40 }} />
          <Typography variant='h4'>477,000+</Typography>
          <Typography variant='h6'>inbound professionals</Typography>
          <Typography variant='h6'>trained and certified</Typography>
        </Grid>
      </Grid>
    </Container >
  )
}
export default About
