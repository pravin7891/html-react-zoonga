import React, { Component } from 'react';

import Ticket from './ticket/Ticket';
import Axios from 'axios';

class Tickets extends Component {
    constructor(props){
      super(props);
    }
    state = {
      ticketlist:null
    }
    componentWillMount(){
      Axios.get('data/tickets.json').then(res => {
        let ticketlist = res.data.tickets.map((ticket) => 
          <Ticket key={ticket.id} ticket={ticket} />
        );
        this.setState({ticketlist})
      });
    }
    render() { 
      let {ticketlist} = this.state;
        return ( 
            <React.Fragment>
                 <section className="hot-ticket-sec ticket-boxes">
    <div className="container">
      <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
      <div className="row">
      {ticketlist}
      </div>
      <div className="btn-sec text-center p-20 pt-0">
        <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
      </div>
    </div>
  </section>
            </React.Fragment>
         );
    }
}
 
export default Tickets;