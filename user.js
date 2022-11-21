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
          displayName: userRecord.toJSON().displayName,
          email: userRecord.toJSON().email,
          phoneNumber: userRecord.toJSON().phoneNumber,
          uid: userRecord.toJSON().uid,
          proffesion: "",
          location: "",
          genre: "",
          expirience: "",
          social: {},
          bio: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async updateCredentials(uid, displayName, email, phone, password) {
    const data = (
      await firestore.collection("users").where("uid", "==", uid).get()
    ).docs[0].data();
    await auth.updateUser(data.uid, {
      email: email ?? data.email,
      emailVerified: false,
      phoneNumber: phone ?? data.phoneNumber,
      password: password,
      displayName: displayName ?? data.name,
      disabled: false,
    });
    await this.updateData(uid, email, phone, displayName);
  }
  async updateData(
    uid,
    email,
    phone,
    displayName,
    profession,
    location,
    genre,
    experience,
    social,
    bio
  ) {
    const docId = (
      await firestore.collection("users").where("uid", "==", uid).get()
    ).docs[0].id;
    const docData = (
      await firestore.collection("users").where("uid", "==", uid).get()
    ).docs[0].data();
    await auth.updateUser(uid, {
      email: email ?? docData.email,
      emailVerified: false,
      phoneNumber: phone ?? docData.phoneNumber,
      displayName: displayName ?? docData.displayName,
      disabled: false,
    });
    await firestore
      .collection("users")
      .doc(docId)
      .set({
        email: email ?? docData.email,
        phoneNumber: phone ?? docData.phoneNumber,
        displayName: displayName ?? docData.displayName,
        uid: uid ?? docData.uid,
        profession: profession ?? docData.profession,
        location: location ?? docData.location,
        genre: genre ?? docData.genre,
        experience: experience ?? docData.experience,
        social: social ?? docData.social,
        bio: bio ?? docData.bio,
      });
  }
  async register(email, password, displayName, phone) {
    await auth
      .createUser({
        email: email,
        emailVerified: false,
        phoneNumber: phone,
        password: password,
        displayName: displayName,
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        this.create(userRecord.uid);
        console.log("Successfully created new user:", userRecord.uid);

        return userRecord.uid;
      });
  }

  async get(uid) {
    return (
      await firestore.collection("users").where("uid", "==", uid).get()
    ).docs[0].data();
  }
}
export default new User();
