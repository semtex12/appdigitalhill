import CompanyModelGenerated from "./generated/CompanyModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CompanyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CompanyModelGenerated,
  ...customModel
};
