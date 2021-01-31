import CompanyApiGenerated from "./generated/CompanyApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CompanyApi extends CompanyApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Company List
  static getCompanyList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/companys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CompanyApi;