import React, {useState, useEffect} from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Col,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default (props) => {
  
  
  const [hasSeatingPreferences, setHasSeatingPreferences] = useState(false);
  const [hasChildren, setHasChildren] = useState(false);
  const [hasChildrenSeats, setHasChildrenSeats] = useState(false);
  const [hasVegetarians, setHasVegetarians] = useState(false);
  const [hasSpecialEvents, setHasSpecialEvents] = useState(false);

  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    phone: '',
    partySize: 2,
    reservationDate: '',
    reservationTime: '',
    specialEvents: [],
    children: 0,
    childrenSeats: 0,
    vegetarians: 0,
    otherComments: '',
    seatingPreferences: ''
  })
  

  return(
  <Page name="form">
    <Navbar title="Reservation form" backLink="Back"></Navbar>

    <BlockTitle>Reservation Form</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="Name"
        type="text"
        placeholder="Your name"
        onChange={(e)=>{console.log(e); setReservation({...reservation,...{name: e.target.value}})}}
      ></ListInput>

      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
        onChange={(e)=>{console.log(e); setReservation({...reservation,...{email: e.target.value}})}}
      ></ListInput>

      <ListInput
        label="Phone"
        type="tel"
        placeholder="Phone"
        onChange={(e)=>{console.log(e); setReservation({...reservation,...{phone: e.target.value}})}}
      ></ListInput>

      <ListInput
        label="Reservation date"
        type="date"
        placeholder="Select day"
        defaultValue="2020-12-24"
        onChange={(e)=>{setReservation({...reservation,...{reservationDate: e.target.value}})}}
      ></ListInput>
      
      <ListInput
        label="Reservation time"
        type="time"
        placeholder="Select time"
        defaultValue="12:00"
        onChange={(e)=>{setReservation({...reservation,...{reservationTime: e.target.value}})}}
      ></ListInput>

      <ListInput
        label={"Party size"}
        input={false}
      >
        <Range onChange={(e)=>{setReservation({...reservation,...{partySize: e.target.value}})}} label scale scaleSteps={6} slot="input" value={2} min={1} max={31} step={1} />
      </ListInput>

    <BlockTitle>Seating preferences</BlockTitle>
    <Block strong>
      <List mediaList>
        <ListItem 
          checkbox
          name="hasSeatingPreferences"
          value={hasSeatingPreferences ? 1 : 0}
          onChange={() => {setHasSeatingPreferences(!hasSeatingPreferences)}}
          subtitle="Do you have any seating preferences?"
        ></ListItem>        
        {hasSeatingPreferences && <ListInput
          label="Seating preferences"
          type="select"
          onChange={(e)=>{setReservation({...reservation,...{seatingPreferences: e.target.value}})}}
          >
          <option>Restaurant anywhere</option>
          <option>Restaurant by the window</option>
          <option>Terrace</option>
          <option>Garden</option>
        </ListInput>}
      </List>
    </Block>
    
      
    <BlockTitle>Children</BlockTitle>
    <Block strong>
      <List>
        <ListItem
          checkbox
          name="hasChildren"
          value={hasChildren ? 1 : 0}
          onChange={() => {setHasChildren(!hasChildren)}}
          title="Are there any children in your party?"
        ></ListItem>
        {hasChildren && <ListInput
          label="How many children?"
          type="number"
          onChange={(e)=>{setReservation({...reservation,...{children: e.target.value}})}}
          >
        </ListInput>}
        {hasChildren && <ListItem
          checkbox
          name="hasChildrenSeats"
          value={hasChildrenSeats ? 1 : 0}
          onChange={() => {setHasChildrenSeats(!hasChildrenSeats)}}
          title="Do you need children seats?"
        ></ListItem>}
        {hasChildren && hasChildrenSeats && <ListInput
          label="How many children seats?"
          type="number"
          onChange={(e)=>{setReservation({...reservation,...{childrenSeats: e.target.value}})}}
          >
        </ListInput>}
      </List>
    </Block>

    <BlockTitle>Vegetarians</BlockTitle>
    <Block strong>
      <List>
        <ListItem
          checkbox
          name="hasVegetarians"
          value={hasVegetarians ? 1 : 0}
          onChange={() => {setHasVegetarians(!hasVegetarians)}}
          title="Are there any vegetariants in your party?"
        ></ListItem>
        {hasVegetarians && <ListInput
          label="How many vegetarians?"
          type="number"
          onChange={(e)=>{setReservation({...reservation,...{vegetarians: e.target.value}})}}
          >
        </ListInput>}
      </List>
    </Block>
      <ListInput
        type="textarea"
        label="Other requests"
        placeholder="Other requests"
      ></ListInput>
      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></ListInput>
    </List>

    <Button onClick={() => console.log(reservation)}>Send reservation request</Button>
  </Page>
)};