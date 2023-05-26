// "use server"
// import dbConnect from "@/utils/dbConn";
// import Contact from "@/models/Contact";

// const submitContact = async (data) => {
//   try {
//     await dbConnect();

//         await Contact.create(data);
//         return{status: "ok", message:"message sent successfully!" };
//   } catch (error) {
//       return {status: "ERROR", message: "server error, please try again"}
//   }
// };

// export default submitContact;