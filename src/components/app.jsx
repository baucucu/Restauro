import React from 'react';

import {
  App,
  AccordionContent,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../js/routes';

import firebase from '../js/firebase.js';

require("firebase/firestore");
var db = firebase.firestore();

const reservationsRef = db.collection('reservations');


export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'Restaurant Reservations', // App name
        theme: 'auto', // Automatic theme detection
        on: {
          'init': () => {
            
            reservationsRef.doc("OT12348").set({
              "@context": "http://schema.org",
              "@type": "FoodEstablishmentReservation",
              "reservationNumber": "OT12348",
              "reservationStatus": "http://schema.org/Confirmed", // Pending || Confirmed || Hold || Cancelled
              "underName": {
                "@type": "Person",
                "name": "Alex Raduca",
                "phone": "+40754832167",
                "email": "alexandru.raduca@gmail.com"
              },
              "reservationFor": {
                "@type": "FoodEstablishment",
                "name": "Stana lui Aidan",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "83 Ciurila",
                  "addressLocality": "Ciurila",
                  "addressRegion": "Cluj",
                  "postalCode": "400400",
                  "addressCountry": "Romania"
                }
              },
              "startTime": "2027-04-10T08:00:00+00:00",
              "endTime": "2027-04-10T10:00:00+00:00",
              "partySize": "2",
              "additionalInfo": {
                "children": 2,
                "childrenSeats": 2,
                "vegetarians": 1,
                "specialEvents": [
                  "Birthday"
                ],
                "seatingPreferences": "locuri cu vedere la geam",
                "otherComments": "e posibil sa intarziem 15 minute",
              },
              "adminNotes":"",
              "table":"1B",
              "order":{}
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef && docRef.id);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
          }
        },


        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: '/service-worker.js',
        },
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >

        {/* Left panel with cover effect when hidden */}
        <Panel left cover themeDark visibleBreakpoint={960}>
          <View>
            <Page>
              <Navbar title="Left Panel"/>
              <List>
                <ListItem link="/" view=".view-main" title="Dashboard"/>
              </List>
              <BlockTitle>Left View Navigation</BlockTitle>
              <List>
                <ListItem link="/customers/" view=".view-main" title="Customers"/>
                <ListItem link="/orders/" view=".view-main" title="Orders"/>
              </List>
              <BlockTitle>Reservations</BlockTitle>
              <List>
                <ListItem view=".view-main" link="/reservations/" title="Reservations" noChevron></ListItem>
                <ListItem view=".view-main" title="Form" link="/reservations-form/" noChevron></ListItem>
              </List>
              <BlockTitle>Loyalty</BlockTitle>
              <List>
                <ListItem link="/loyalty/" view=".view-main"  title="Loyalty"/>
              </List>
              <BlockTitle>Left View Navigation</BlockTitle>
              <List>
                <ListItem link="/left-page-1/" title="Left Page 1"/>
                <ListItem link="/left-page-2/" title="Left Page 2"/>
              </List>
              <BlockTitle>Control Main View</BlockTitle>
              <List>
                <ListItem link="/about/" view=".view-main" panelClose title="About"/>
                <ListItem link="/form/" view=".view-main" panelClose title="Form"/>
                <ListItem link="#" view=".view-main" back panelClose title="Back in history"/>
              </List>
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Right Panel"/>
              <Block>Right panel content goes here</Block>
            </Page>
          </View>
        </Panel>


        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

        {/* Popup */}
        <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup>

        <LoginScreen id="my-login-screen">
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <List form>
                <ListInput
                  type="text"
                  name="username"
                  placeholder="Your username"
                  value={this.state.username}
                  onInput={(e) => this.setState({username: e.target.value})}
                ></ListInput>
                <ListInput
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.state.password}
                  onInput={(e) => this.setState({password: e.target.value})}
                ></ListInput>
              </List>
              <List>
                <ListButton title="Sign In" onClick={() => this.alertLoginData()} />
                <BlockFooter>
                  Some text about login information.<br />Click "Sign In" to close Login Screen
                </BlockFooter>
              </List>
            </Page>
          </View>
        </LoginScreen>
      </App>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password, () => {
      this.$f7.loginScreen.close();
    });
  }
  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
      console.log(process.env);
    });
  }
}