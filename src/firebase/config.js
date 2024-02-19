
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, onSnapshot, addDoc, setDoc, doc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7x-7W2WGds0jpsA7SdymJarSZuB_jHWQ",
  authDomain: "cardiology-server.firebaseapp.com",
  projectId: "cardiology-server",
  storageBucket: "cardiology-server.appspot.com",
  messagingSenderId: "23761631569",
  appId: "1:23761631569:web:b112f4de9a81a2e4d5bb70",
  measurementId: "G-XH4GP1VSY5"
};

initializeApp(firebaseConfig);
const db = getFirestore()
const membership_items = collection(db, 'membership_items');
const education_items = collection(db, 'education_items');
const ask_items = collection(db, 'ask_items');
const news_items = collection(db, 'news_items');

const data = [

]
  
const postNewsItem = async () => {
    for (let i = 0; i < data.length; i++) {
      await addDoc(news_items, {
        title: data[i].title,
        date_published: data[i].date_published,
        phrase: data[i].phrase,
        summary: data[i].summary,
        content: data[i].content
      })
    }
  }

  //postNewsItem()

  const getNewsItemAll = () => getDocs(news_items).then((snapshot) => {
    let news = []
    snapshot.docs.forEach((doc) => {
        news.push({ ...doc.data(), id: doc.id })
    }) 
    return news
  })

  const getNewsItemById = (id) => getDoc(doc(db, 'news_items', id)).then((doc) => {
    return {
        id: doc.id,
        title: doc.data().title,
        date: doc.data().date_published,
        phrase: doc.data().phrase,
        summary: doc.data().summary,
        content: doc.data().content}
  })



const postAskItem = async (name, email, content) => {
      return await addDoc(ask_items, {
        name: name,
        email: email,
        content: content
      })
  }

const postEducationItem = async (last_name, first_name, patro_name, email, phone_number, speciality, address_home, address_work, picked_month, picked_time, terms) => {
    return await addDoc(education_items, {
      last_name: last_name,
      first_name: first_name,
      patro_name: patro_name,
      email: email,
      phone_number: phone_number,
      speciality: speciality,
      address_home: address_home,
      address_work: address_work,
      picked_month: picked_month,
      picked_time: picked_time,
      terms: terms
    })
}

const postMembershipItem = async (last_name, first_name, patro_name, email, phone_number, date_birth, place_birth, address, id_doc, date_doc, place_doc, education, add_education, interests, experience, date_member, terms) => {
    return await addDoc(membership_items, {
      last_name: last_name,
      first_name: first_name,
      patro_name: patro_name,
      email: email,
      phone_number: phone_number,
      date_birth: date_birth,
      place_birth: place_birth,
      address: address,
      id_doc: id_doc,
      date_doc: date_doc, 
      place_doc: place_doc,
      education: education,
      add_education: add_education,
      interests: interests,
      experience: experience,
      date_member: date_member,
      terms: terms
    })
}



export {postAskItem, postMembershipItem, postEducationItem, getNewsItemAll, getNewsItemById}