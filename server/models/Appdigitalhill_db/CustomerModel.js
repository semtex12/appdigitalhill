import CustomerModelGenerated from "./generated/CustomerModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CustomerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CustomerModelGenerated,
  ...customModel
};
