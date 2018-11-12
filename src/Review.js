import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import moment from 'moment'
const Review = (props) => (
  <Grid celled>
    <Grid.Column width={4}>
     <Image src={props.image} />
    </Grid.Column>
    <Grid.Column width={8}>
      <h2>{props.restaurant}</h2>
      <h3>{props.location}</h3>
      <h3 style={{color: "red"}}>{props.user} says: '{props.body}'</h3>
      <h4 style={{color: "grey"}}>{moment(props.created_at).fromNow()}</h4>
    </Grid.Column>
  </Grid>
)

export default Review
