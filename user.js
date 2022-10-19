import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const firestore = getFirestore();
const auth = getAuth();

class User {
  async create(uid) {
    await auth
      .getUser(uid)
      .then((userRecord) => {
        firestore.collection("users").add({
          name: userRecord.toJSON().displayName,
          email: userRecord.toJSON().email,
          phoneNumber: userRecord.toJSON().phoneNumber,
          uid: userRecord.toJSON().uid,
          proffesion: "",
          location: "",
          genre: "",
          expirience: "",
          social: "",
          bio: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async update(uid, name, email, phoneNumber) {
    const docId = (
      await firestore.collection("users").where("uid", "==", uid).get()
    ).docs[0].id;
    const docData = (
      await firestore.collection("users").where("uid", "==", uid).get()
    ).docs[0].data();
    return await firestore
      .collection("users")
      .doc(docId)
      .set({
        name: name ?? docData.name,
        email: email ?? docData.email,
        phoneNumber: phoneNumber ?? docData.phoneNumber,
        uid: uid,
        proffesion: "",
        location: "",
        genre: "",
        expirience: "",
        social: "",
        bio: "",
      });
  }
  async register(email, password, displayName, phoneNumber) {
    await auth
      .createUser({
        email: email,
        emailVerified: false,
        phoneNumber: phoneNumber,
        password: password,
        displayName: displayName,
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        this.create(userRecord.uid);
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
  }
  async get(uid) {
    return (
      await firestore.collection("users").where("uid", "==", uid).get()
    ).docs[0].data();
  }
}
export default new User();
