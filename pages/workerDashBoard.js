import {useRouter} from "next/router";
import {useAuthState} from 'react-firebase-hooks/auth'
import {useState, useEffect, useRef} from "react";

import firebase from '../lib/firebase'
import styles from '../styles/workerDashBoard.module.css'

import Contacts from '../components/Contacts'

function workerDashBoard() {
    
    const [selectedSection, setselectedSection] = useState(1)
  const [givenWorks, setgivenWorks] = useState([]);
const [isWorker, setisWorker] = useState('')
  const [dataError, setdataError] = useState("");
  const router = useRouter();
  const [user, loading, error] = useAuthState(firebase.auth());
  if (!loading && (user == undefined || user == null)) {
    console.log("yo");
    router.push("/404");
  }
  
  const getData = async () => {
    try {
    
      var givenWorks2 = [];
      const listOfWorkers = firebase.firestore().collection('workers').where('email','==',user.email).get()
     
      alert(await (listOfWorkers.docs.length))
      alert('yo')
      (await listOfWorkers).docs.map(singleWorker=>{

        alert(singleWorker.data().isVerified)
        if(singleWorker.data().isVerified){
          setisWorker(true)
        }
        else{setisWorker(false)}
      })
      const works = firebase
        .firestore()
        .collection("works")
        .where("email", "==", user.email)
        .onSnapshot(snapshot=>{setgivenWorks(snapshot.docs.map(doc=>doc.data()))});
     
      
    } catch (e) {
      console.log(e.message);
      setdataError(e.message);
    }
  };
  useEffect(() => {
    if (user != null && user != undefined) getData();

    return () => {};
  }, [user]);

  return (!loading && user ? 
    !isWorker?<div style={{
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      color: "red",
    }}>
Your profile is still under review. <br /> You shall receive email once you are verified
    </div>:
    <div>
      {/* <Dashboardheader /> */}
      <div className={styles.course__container}>
        <div className={styles.course__body}>
          <div className={styles.course__link}>
            <nav className={styles.sidebar}>
              <ul className={styles.sidebar__list}>
                <h2 className={styles.header__heading2}>My Project</h2>
               
                  <button onClick={()=>{setselectedSection(1)}}  className={(selectedSection==1 ? styles.active:styles.link__btn)}>
                    <div  style={{textAlign:'left'}}>Assignments</div>
                  </button>
            
               
              </ul>
            </nav>

            <main className={styles.course__link_container}>
              {selectedSection==1 && <div className={styles.course__placeholder}>
                <div className={styles.course__area}>
                  <div>
                    <div className={styles.course__body_header}>
                      <h1 className={styles.header__heading1}>
                        Unfinished Projects
                      </h1>
                    </div>
                    <div className={styles.course__space}>
                      {givenWorks.filter((item) => item.isDone == false)
                        .length == 0 && (
                        <div>
                          <h2 className={styles.header__heading2}>
                            you have no unfinished works, check the finished
                            works segment below
                          </h2>
                        </div>
                      )}

                      <div className={styles.course_inwork}>
                        {givenWorks
                          .filter((item) => item.isDone == false)
                          .map((singleWork, index) => (
                            <div key={index} className={styles.workspacing}>
                              <div className={styles.course_header}>
                                <h2 className={styles.header__heading2}>
                                  {singleWork.title}
                                </h2>
                              </div>
                              <div className={styles.header__pay}>
                                <table>
                                <tbody>  <tr>
                                    <th>Project description</th>
                                  
                                    <th>Domain</th>
                                    <th>Tools to use</th>
                                    <th>Project type</th>
                                    <th>Due date</th>
                                    <th>Project submission</th>
                                  </tr>
                                  <tr>
                                    <td>
                                      {
                                        <a
                                          className={styles.edit__btn}
                                          href={singleWork.customerDoc}
                                        >
                                          Click to view
                                        </a>
                                      }
                                    </td>
                                    <td>{singleWork.domain}</td>
                                    <td>{singleWork.tools}</td>
                                    <td>{singleWork.serviceType}</td>
                                    <td>{singleWork.dueDate}</td>
                                    <td>
                                    
                                        <input onChange={async(e)=>{
                                         try{
                                            var cv = Date().toString()
                                            var upload1 = await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/workerDocs/' + cv).put(e.target.files[0])
                                            upload1 =  await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/workerDocs/' + cv).getDownloadURL() 
                                         var docToEdit =   (await firebase.firestore().collection('works').where('customerDoc','==',singleWork.customerDoc).get()).docs[0].id;
                                         firebase.firestore().collection('works').doc(docToEdit).set({
                                             workerDoc: upload1,
                                             isDone:true
                                         }, {merge: true})
                                       
                                         }
                                         catch(e){
                                             alert(e.message)
                                         }
                                        }} className={styles.submit__file} type="file" name="work" id="work" />
                                      
                                    </td>
                                  </tr></tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className={styles.course__body_header}>
                      <h1 className={styles.header__heading1}>
                        Projects you have submitted
                      </h1>
                    </div>

                    <div className={styles.course__space}>
                      {givenWorks.filter((item) => item.isDone == true)
                        .length == 0 && (
                        <div>
                          <h2 className={styles.header__heading2}>
                            You have no finished projects yet
                          </h2>
                        </div>
                      )}

                      <div className={styles.course_inwork}>
                        {givenWorks
                          .filter((item) => item.isDone == true)
                          .map((singleWork, index) => (
                            <div key={index} className={styles.workspacing}>
                              <div className={styles.course_header}>
                                <h2 className={styles.header__heading2}>
                                 {singleWork.title}
                                </h2>
                              </div>
                              <div className={styles.header__pay}>
                                <table>
                                 <tbody> <tr>
                                    <th>Project</th>
                                    
                                    <th>Domain</th>
                                    <th>Tools to use</th>
                                    <th>Project type</th>
                                    <th>Due date</th>
                                    <th>Finished Work</th>
                                  </tr>
                                  <tr>
                                    <td>
                                      {
                                        <a
                                          className={styles.edit__btn}
                                          href={singleWork.customerDoc}
                                        >
                                          Click to view
                                        </a>
                                      }
                                    </td><td>{singleWork.domain}</td>
                                    <td>{singleWork.tools}</td>
                                    <td>{singleWork.serviceType}</td>
                                    <td>{singleWork.dueDate}</td>
                                    <td>
                                      {
                                        <a
                                          className={styles.edit__btn}
                                          href={singleWork.workerDoc}
                                        >
                                          Click to view
                                        </a>
                                      }
                                    </td></tr></tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>}
           
            </main>
          </div>
        </div>
      </div>
    </div>
   : dataError ? 
    <div
      style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        color: "red",
      }}
    >
      Could not fetch data
      <br />
      Please refresh page again.
    </div>
   : 
    <div
      style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
      }}
    >
      Loading...
      <br />
      Please wait
    </div>
  );
}

export default workerDashBoard
