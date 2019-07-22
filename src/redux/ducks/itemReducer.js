import axios from "axios";

const GET_TV = "GET_TV";
const GET_PHONE = "GET_PHONE";
const GET_GAME = "GET_GAME";
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const SET_TOTAL = "SET_TOTAL";
const GET_ACCESORY = "GET_ACCESORY";
const GET_ALL = "GET_ALL";

export function getAll() {
	return {
		type: GET_ALL,
		payload: axios.get(`/api/products`)
	};
}

export function getTv() {
	return {
		type: GET_TV,
		payload: axios.get(`/api/tv`)
	};
}
export function getAccesory() {
	return {
		type: GET_TV,
		payload: axios.get(`/api/acessory`)
	};
}

export function setTotal(total) {
	return { type: SET_TOTAL, payload: total };
}

export function getPhone() {
	return {
		type: GET_TV,
		payload: axios.get(`/api/phone`)
	};
}

export function getGame() {
	return {
		type: GET_GAME,
		payload: axios.get(`/api/game`)
	};
}

export function getCart() {
	return {
		type: GET_CART,
		payload: axios.get("/api/cart")
	};
}

export function addToCart(item) {
	return {
		type: ADD_TO_CART,
		payload: axios.post("/api/cart", item)
	};
}

const initialState = {
	items: {},
	cart: [],
	addToCartErrMsg: "",
	totalAmount: 0
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case `${GET_TV}_FULFILLED`:
			return {
				...state,
				items: action.payload.data
			};
		case `${GET_ALL}_FULFILLED`:
			return {
				...state,
				items: action.payload.data
			};
		case `${GET_PHONE}_FULFILLED`:
			return {
				...state,
				items: action.payload.data
			};
		case `${GET_ACCESORY}_FULFILLED`:
			return {
				...state,
				items: action.payload.data
			};
		case `${GET_GAME}_FULFILLED`:
			return {
				...state,
				items: action.payload.data
			};
		case `${GET_CART}_FULFILLED`:
			return {
				...state,
				cart: action.payload.data
			};
		case `${ADD_TO_CART}_FULFILLED`:
			return {
				...state,
				cart: action.payload.data
			};
		case `${ADD_TO_CART}_REJECTED`:
			return {
				...state,
				addToCartErrMsg: "Failed To Add To Cart"
			};
		case SET_TOTAL:
			return { ...state, totalAmount: action.payload };
		default:
			return state;
	}
}
