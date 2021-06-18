import { Card, Button } from '@material-ui/core'
import React from 'react'


const Home = () => {
    return (
        <div className="container">
            <Card>
                <Button color="primary" variant="contained" href={'/example'}>Example</Button>
            </Card>
        </div>
    )
}

export default Home
