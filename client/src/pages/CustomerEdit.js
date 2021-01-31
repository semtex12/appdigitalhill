// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import CustomerActions from "../redux/actions/CustomerActions";
import CompanyActions from "../redux/actions/CompanyActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomer.create
*	@description CRUD ACTION create
*
* actionsCustomer.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCustomer.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsCompany.findBystaff
*	@description CRUD ACTION findBystaff
*	@param Objectid key - Id of model to search for
*

**/

class CustomerEdit extends Component {
  // Init customer
  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCustomer.loadCustomer(this.props.match.params.id);
      this.props.actionsCompany.findBystaff(this.props.match.params.id);
    }
    
  }

  // Insert props customer in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      customer: props.customer
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.customer._id) {
      this.props.actionsCustomer.saveCustomer(this.state.customer).then(data => {
        this.props.history.push("/customers/");
      });
    } else {
      this.props.actionsCustomer.createCustomer(this.state.customer).then(data => {
        this.props.history.push("/customers/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Customer Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Company */}
          
          <h3>Company</h3>
          {(!this.props.listCompany || this.props.listCompany.length === 0) && 
            <div>No Company associated</div>
          }
          {this.props.listCompany &&
            this.props.listCompany.map((item, i) => {
              return (
                <Link to={"/companys/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/customers/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCustomer: bindActionCreators(CustomerActions, dispatch),
    actionsCompany: bindActionCreators(CompanyActions, dispatch),
  };
};

// Validate types
CustomerEdit.propTypes = { 
  actionsCustomer: PropTypes.object.isRequired,
  actionsCompany: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    customer: state.CustomerEditReducer.customer,
    listCompany: state.CustomerEditReducer.listCompany
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerEdit);
