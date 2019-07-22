import React, { Component } from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBCollapse,
	MDBContainer,
	MDBHamburgerToggler
} from "mdbreact";
import { Link } from "react-router-dom";

class Navbar extends Component {
	state = {
		collapse1: false,
		collapseID: ""
	};

	toggleCollapse = collapseID => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		}));
	};

	toggleSingleCollapse = collapseId => {
		this.setState({
			...this.state,
			[collapseId]: !this.state[collapseId]
		});
	};

	render() {
		return (
			<MDBContainer style={{}}>
				<MDBNavbar
					color="black"
					style={{
						marginTop: "0px"
					}}
					light
				>
					<MDBContainer>
						<Link to="/">
							<MDBNavbarBrand>SellSpot</MDBNavbarBrand>
						</Link>
						<MDBHamburgerToggler
							color="black"
							id="hamburger1"
							onClick={() => this.toggleSingleCollapse("collapse1")}
						/>
						<MDBCollapse isOpen={this.state.collapse1} navbar>
							<MDBNavbarNav left>
								<MDBNavItem active>
									<MDBNavLink to="/">Home</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="/cart">Cart</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink to="/search">Search</MDBNavLink>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBContainer>
				</MDBNavbar>
			</MDBContainer>
		);
	}
}

export default Navbar;
