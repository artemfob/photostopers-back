import {getFirestore} from 'firebase-admin/firestore';

const firestore = getFirestore();


class User{
    async create(name, age, sex){
        await firestore.collection('users').add({'name': name, 'age': age, 'sex': sex});
    }
    async get(){
         return (await firestore.collection('users').doc('alovelace').get()).data()
    }
}
export default new User();