import { Grid } from '@mui/material'
import React from 'react'
import '../Services/services.scss'
import banner from '../../images/banner.jpg'
import ButtonModal from '../ButtonModal/ButtonModal'
const Services = () => {
    return (
        <div className='container'>
            <Grid container paddingY={10}>
                <Grid item xs={6}>
                    <span>
                        ONLINE STREAMING
                    </span>
                    <h1>
                        Live Movie & TV Shows For Friends & Family
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                        eiusmod There are many variations
                        of passages of lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                    <span className='hd'>
                        HD 4K
                    </span>
                    <ButtonModal />
                </Grid>
                <Grid item xs={6}>
                    <img src={banner} alt="" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Services