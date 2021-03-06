const userModels = require('../../model/users');
const { pubsub } = require('../helper');

module.exports = {
  RootMutation: {
    createUser: async(parent, args, ctx, info) => {
      try {
        let query = { 'username': args.newUser.username };
        const createUserDetails = await userModels.findOneAndUpdate(query, args.newUser, { upsert: true, new: true });
        pubsub.publish('userTopic', {
            user: createUserDetails
        });
        return createUserDetails;
      } catch (error) {
          return error;
      }
    },
    deleteUser: async(parent, args, ctx, info) => {
        let responseMSG = {};
        try {
          let query = { 'username': args.username };
          const createUserDetails = await userModels.findOneAndDelete(query);
          if (createUserDetails == null) {
            responseMSG.response = "No User found for this opertaion";
            return responseMSG;
          } else {
            responseMSG.response = "Success";
            return responseMSG;
          }
        }
        catch (error) {
          responseMSG.response = "Fail";
          return responseMSG;
        }
    }
  }
}