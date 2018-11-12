import React from 'react'
import { Grid, Image, Header, Modal, Icon } from 'semantic-ui-react'
import moment from 'moment'

const Review = (props) => (
  <Modal trigger={
      <Grid celled>
      <Grid.Column width={4}>
       <Image src={props.image} />
      </Grid.Column>
      <Grid.Column width={8}>
        <h2>{props.restaurant}</h2>
        <h3 style={{color: "red"}}>{props.user} says: '{props.body}'</h3>
        <h4 style={{color: "grey"}}>{moment(props.created_at).fromNow()}</h4>
      </Grid.Column>
    </Grid>
  }>
    <Modal.Content>
      <Image src={props.image} size="large" />
      <h2>{props.restaurant}</h2>
      <h3><Icon name="map marker alternate" />{props.location}</h3>
      <h4><Icon name="food" />Cuisines: {props.cuisines}</h4>
      <h4><Icon name="dollar" />Average cost for two: ${props.cost_for_two}</h4>
    </Modal.Content>
</Modal>
)

export default Review
