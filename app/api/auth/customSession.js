import { getSession} from "next-auth/react";

export const userSession = async () => {
  const session = await getSession();
  try {
    if(session) {
      return session.user;
    }
  } catch (err) {
    console.log("Error in userSession",err);
  }

};

export default userSession;