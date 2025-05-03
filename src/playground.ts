import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "jG6w4@example.com",
    firstName: "SitaRam",
    lastName: "Shree",
  },
});
console.log("done");

