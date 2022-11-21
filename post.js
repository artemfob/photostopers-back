import { getFirestore } from "firebase-admin/firestore";
const firestore = getFirestore();

class Post {
  async create(
    author,
    dateOfCreating,
    profession,
    experience,
    genre,
    location,
    sessionDate,
    shortInfo
  ) {
    await firestore.collection("posts").add({
      author: author,
      dateOfCreating: dateOfCreating,
      profession: profession,
      experience: experience,
      genre: genre,
      location: location,
      sessionDate: sessionDate,
      shortInfo: shortInfo,
    });
  }

  async getAll() {
    return (await firestore.collection("posts").get()).docs.map((item) =>
      item.data()
    );
  }
}

export default new Post();
