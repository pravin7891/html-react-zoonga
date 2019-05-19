import React, { Component } from 'react';

class Ticket extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="box">
          {this.props.ticket.eventAttendants.length > 0 && 
            <div className="dropdown visiter-icon">
              <a href="#" className="dropdown-toggle" type="button" data-toggle="dropdown"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
              <div className="dropdown-menu">
                <p>Who's attending ({this.props.ticket.eventAttendants.length})</p>
                {this.props.ticket.eventAttendants.map((attendant) => 
               <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt=""/>{attendant}</a>

                    )}
   
              
              </div>
            </div>
          }
            <a href={this.props.ticket.eventslug} className="block-link">
              <div className="ticket-img">
                <img src={this.props.ticket.eventimg} alt=""/>
                <span className="ticket-price">{this.props.ticket.eventTicketsFrom}</span>
              </div>
              <div className="ticket-info">
                <span className="time-info">{this.props.ticket.eventDate}</span>
                <h3 className="ticket-title">{this.props.ticket.eventname}</h3>
                <p className="venue-info">{this.props.ticket.eventVenue}</p>
              </div>
            </a>
            <div className="social clearfix">
              <div className="pull-left">
                <a className="btn btn-default btn-xs ical" href="#">
              <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                <a className="btn btn-default btn-xs ml-10" href="#">
              <i className="fa fa-calendar"></i> &nbsp;Google</a>
              </div>
              <div className="pull-right">
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-facebook"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
            </React.Fragment>
         );
    }
}
 
export default Ticket;