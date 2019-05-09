import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ClientList = props => {
  return (
    <div>
      <h2>Customer List - {props.clients.length} </h2>
      <ul>
        {props.clients.map(client => {
          return (
            <li key={client.id}>
              <Link to={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/clients/new">Add Customer</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.project,
    clients: state.client
  };
};
export default connect(mapStateToProps)(ClientList);
