// import $ from 'jquery-lite';
// import _ from "lodash";

const functions = {};

functions.isUndefinedOrNullOrEmpty = (element) => element = "" || element == null || element == undefined  ? true : false;

export default functions;