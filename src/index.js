import {initializeApp} from "firebase/app";
import {
    getFirestore,collection,getDocs, addDoc
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC1KzMjU7e1u3Qy4d4P8nrWtNIk2YQA6gI",
    authDomain: "jimdata-b0155.firebaseapp.com",
    projectId: "jimdata-b0155",
    storageBucket: "jimdata-b0155.appspot.com",
    messagingSenderId: "920911532065",
    appId: "1:920911532065:web:8e4720b588bb0e5f18d360"
  };
  initializeApp(firebaseConfig);
// init services
const db=getFirestore();
// collection Ref
const colRef=collection(db,'jimdata');
// get collection  data
getDocs(colRef)
   .then((snapshot)=>{
    console.log(snapshot.docs)
    let jimdata=[]
    snapshot.docs.forEach((doc)=>{
        jimdata.push({...doc.data(),id:doc.id});
    })
    console.log(jimdata)
}).catch((err)=>{console.log(err.message)});

//  Add data to Database

const addData=document.querySelector('.add');
addData.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(addData.name.value);
    addDoc(colRef,{
             name:addData.name.value,
             age:addData.age.value,
             gender:addData.gender.value,
             locailty:addData.locailty.value
    }).then(()=>{
        addData.reset();
    })
})