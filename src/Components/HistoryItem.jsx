import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { Component } from 'react'

export class HistoryItem extends Component {
    constructor() {
        super();
        console.log("Constructor started running!!");

    }
    render() {
        let { title, description, imageUrl } = this.props

        return (
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt="..."
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        )
    }
}

export default HistoryItem