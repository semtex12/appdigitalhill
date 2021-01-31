import actionsFunction from "./generated/CompanyActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CompanyApi from "../../api/CompanyApi";
 
 actionsFunction.loadCompanyList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CompanyApi
     .getCompanyList()
     .then(list => {
       dispatch(actionsFunction.loadCompanySuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
