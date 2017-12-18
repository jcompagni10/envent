import React from 'react';
import { Link, Switch } from 'react-router-dom';
import EventFormContainer from '../event/event_form_container';
import ScheduleContainer from './../schedule/schedule_container';
import { ProtectedRoute } from './../../util/route_util';
import { Nav, NavItem } from 'react-bootstrap';
import NewsPlaceholder from './../news/news_placeholder';
import MessageBoardPlaceholder from './../message_board/message_board_placeholder';
import MapContainer from './../map/map_container';


export default class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(parseInt(this.props.match.params.eventId));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.eventId !== newProps.match.params.eventId) {
      this.props.fetchEvent(parseInt(newProps.match.params.eventId));
    }
  }

  render() {
    let { id, display_elements } = this.props.currentEvent;
    
    if (id === undefined) {
      return null;
    }

    // let links = display_elements.map(el => (
    //   <Link
    //     className="event-link-nav"
    //     key={el}
    //     to={`/event/${id}/${el}`}
    //   >{ el }</Link>
    // ));
    return (
      <div className="event-switch-container">

        <div className="event-show-container">
          {/* <div className="event-links-container">
            { links }
          </div> */}

          <Nav bsStyle="tabs" activeHref={"#" + this.props.location.pathname}>
            <NavItem
              eventKey={1}
              href={`#/event/${id}`}
            >Event</NavItem>
            {
              display_elements.map((el, i) => (
                <NavItem
                  key={el}
                  eventKey={i + 2}
                  href={`#/event/${id}/${el}`}
                >{el}</NavItem>
              ))
            }
          </Nav>
          

          <Switch>
            <ProtectedRoute path="/event/:eventId/schedule" component={ScheduleContainer} />
            <ProtectedRoute path="/event/:eventId/News" component={NewsPlaceholder} />
            <ProtectedRoute path="/event/:eventId/MessageBoard" component={MessageBoardPlaceholder} />
            <ProtectedRoute path="/event/:eventId/Map" component={MapContainer} />
            <ProtectedRoute path="/event/:eventId" component={EventFormContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}
