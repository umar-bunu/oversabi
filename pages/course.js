import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import {useState} from 'react'
import firebase from '../lib/firebase'
import styles from "../styles/coursestyles.module.css";
import {useAuthState} from 'react-firebase-hooks/auth'
export default function Course() {
    const [dataError, setdataError] = useState('')
    const [progress, setprogress] = useState('')
    const [selectedService, setselectedService] = useState('Assignment')
    const handleSubmit = async (event) => {
        event.preventDefault()
        setdataError('');
        setprogress('')
       
        try {
            var receipt = Date().toString()
          
            var upload1 = await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/receipts/' + receipt).put(event.target.receipt.files[0])
            var costumerDoc = Date().toString()

            var upload2 = await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/customerDocs/' + costumerDoc).put(event.target.receipt.files[0]);
            upload1 = await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/receipts/' + receipt).getDownloadURL()
            upload2 = await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/customerDocs/' + costumerDoc).getDownloadURL()
            await firebase.firestore().collection('works').add({
                customerDoc: upload2,
                customer: event.target.email.value,
                domain: event.target.domain.options[event.target.domain.selectedIndex].text,
                dueDate: event.target.dueDate.value.toString(),
                isDone: false,
                paymentReceipt: upload1,
                phoneNo: event.target.phoneNo.value,
                serviceType: event.target.serviceType.options[event.target.serviceType.selectedIndex].text,
                tools: event.target.tools.options[event.target.tools.selectedIndex].text,
                Worker: '',
                workerDoc: ''
            })
            alert('Success.\nOnce payment is verified, your project shall be attended to')
           
        } catch (e) {

            console.log(e.message);
            alert(e);
        }

    }
    return (
        <form action=""
            onSubmit={handleSubmit}>
            <div className={
                styles.header__content
            }>
                <div className={
                    styles.header__body
                }>
                    <div className={
                        styles.course__header
                    }>
                        <h1 className={
                            styles.header__heading1
                        }>
                            Special offer with Comfortable Price!
                        </h1>
                        <p className={
                            styles.header__paragraph
                        }>Just Select Correct Options and Calculate Best Price!. Result is all that Matters!</p>
                    </div>

                    {
                    dataError && <div className={
                        styles.dataError
                    }>
                        {dataError}</div>
                }

                    <div className={
                        styles.course__body_content
                    }>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Your Email</h2>
                            <input className={styles.input__field} required type="email" name="email" id="country"/>
                        </div>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Academic Level</h2>
                            <select required id="country" name="AcademicLevel">
                                <option value="masters">Masters</option>
                                <option value="undergraduate">Undergraduate</option>
                                <option value="phd">Phd</option>
                            </select>
                        </div>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Select Domain</h2>
                            <select required id="country" name="domain">

                                <option value="1">Accounting &amp; Finance</option>
                                <option value="49">Advertising/Public Relations</option>
                                <option value="51">Animal/Plant Biology</option>
                                <option value="52">Anthropology</option>
                                <option value="53">Archaeology</option>
                                <option value="54">Architecture</option>
                                <option value="55">Art</option>
                                <option value="186">BioInformatics</option>
                                <option value="56">Biology</option>
                                <option value="57">Business</option>
                                <option value="58">Chemistry</option>
                                <option value="59">Children &amp; Young People</option>
                                <option value="3">Civil</option>
                                <option value="60">Civil Litigation Law</option>
                                <option value="61">Commercial Law</option>
                                <option value="62">Commercial Property Law</option>
                                <option value="63">Communications</option>
                                <option value="65">Comparative/Conflict of Laws</option>
                                <option value="66">Competition Law</option>
                                <option value="4">Computer Science</option>
                                <option value="69">Construction</option>
                                <option value="70">Construction Law</option>
                                <option value="71">Contract Law</option>
                                <option value="72">Counselling</option>
                                <option value="74">Criminal Law</option>
                                <option value="75">Criminal Litigation (Law)</option>
                                <option value="76">Criminology</option>
                                <option value="77">Cultural Studies</option>
                                <option value="78">Dentistry</option>
                                <option value="79">Design</option>
                                <option value="80">Drama</option>
                                <option value="5">Economics</option>
                                <option value="82">Economics (Social Sciences)</option>
                                <option value="83">Education</option>
                                <option value="84">Employment</option>
                                <option value="85">Employment Law</option>
                                <option value="86">Engineering</option>
                                <option value="87">English Language</option>
                                <option value="88">English Legal System (Law)</option>
                                <option value="89">English Literature</option>
                                <option value="90">Environment</option>
                                <option value="91">Environmental Sciences</option>
                                <option value="92">Environmental/Planning Law</option>
                                <option value="93">Equity &amp; Trusts Law</option>
                                <option value="94">Estate Management</option>
                                <option value="95">European (EU) Law</option>
                                <option value="96">European Studies</option>
                                <option value="97">Family Law</option>
                                <option value="98">Fashion</option>
                                <option value="99">Film Studies</option>
                                <option value="100">Finance</option>
                                <option value="101">Finance Law</option>
                                <option value="102">Food and Nutrition</option>
                                <option value="103">Forensic Science</option>
                                <option value="104">French</option>
                                <option value="105">General Law</option>
                                <option value="106">Geography</option>
                                <option value="107">Geology</option>
                                <option value="108">German</option>
                                <option value="109">Health</option>
                                <option value="110">Health &amp; Social Care</option>
                                <option value="111">Health and Safety</option>
                                <option value="112">Health Psychology</option>
                                <option value="113">History</option>
                                <option value="6">Hospitality</option>
                                <option value="114">Housing</option>
                                <option value="7">HRM</option>
                                <option value="115">Human Resource Management</option>
                                <option value="116">Human Rights</option>
                                <option value="117">Human Rights Law</option>
                                <option value="118">Immigration/Refugee Law</option>
                                <option value="120">Information Systems</option>
                                <option value="121">Information Technology</option>
                                <option value="122">Intellectual Property Law</option>
                                <option value="8">International Business</option>
                                <option value="123">International Commercial Law</option>
                                <option value="124">International Criminal Law</option>
                                <option value="125">International Law</option>
                                <option value="127">International Relations</option>
                                <option value="128">International Studies</option>
                                <option value="129">Jurisprudence (Law)</option>
                                <option value="130">Land/property Law</option>
                                <option value="131">Landlord &amp; Tenant/Housing Law</option>
                                <option value="9">Law</option>
                                <option value="132">Law of Evidence</option>
                                <option value="134">Linguistics</option>
                                <option value="10">Literature</option>
                                <option value="11">Management</option>
                                <option value="136">Maritime Law</option>
                                <option value="12">Marketing</option>
                                <option value="138">Maths</option>
                                <option value="2">Mechanical</option>
                                <option value="139">Media</option>
                                <option value="13">Medical</option>
                                <option value="140">Medical Law</option>
                                <option value="141">Medicine</option>
                                <option value="142">Mental Health</option>
                                <option value="143">Mental Health Law</option>
                                <option value="144">Methodology</option>
                                <option value="145">Music</option>
                                <option value="146">Nursing</option>
                                <option value="147">Occupational Therapy</option>
                                <option value="148">Oil &amp; Gas Law</option>
                                <option value="149">Other</option>
                                <option value="16">Others</option>
                                <option value="150">Paramedic Studies</option>
                                <option value="151">Pharmacology</option>
                                <option value="152">Philosophy</option>
                                <option value="153">Photography</option>
                                <option value="154">Physical Education</option>
                                <option value="155">Physics</option>
                                <option value="156">Physiotherapy</option>
                                <option value="14">Politics</option>
                                <option value="158">Professional Conduct Law</option>
                                <option value="15">Psychology</option>
                                <option value="160">Psychotherapy</option>
                                <option value="161">Public Administration</option>
                                <option value="162">Public Law</option>
                                <option value="163">Quantity Surveying</option>
                                <option value="164">Radiology &amp; Medical Technology</option>
                                <option value="165">Real Estate</option>
                                <option value="166">Security &amp; Risk Management</option>
                                <option value="167">Social Policy</option>
                                <option value="168">Social Work</option>
                                <option value="169">Social Work Law</option>
                                <option value="170">Sociology</option>
                                <option value="171">Spanish</option>
                                <option value="172">Sports Law</option>
                                <option value="173">Sports Psychology</option>
                                <option value="174">Sports Science</option>
                                <option value="175">SPSS</option>
                                <option value="176">Statistics</option>
                                <option value="177">Tax Law</option>
                                <option value="178">Teacher Training / PGCE</option>
                                <option value="179">TESOL</option>
                                <option value="180">Theatre Studies</option>
                                <option value="181">Theology &amp; Religion</option>
                                <option value="182">Tort Law</option>
                                <option value="183">Tourism &amp; Hospitality</option>
                                <option value="184">Town &amp; Country Planning</option>
                                <option value="185">Translation</option>
                            </select>
                        </div>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Desired Service</h2>
                            <select required id="country" name="serviceType" onChange={(e)=>{
                                e.preventDefault()
                                setselectedService(e.target.options[e.target.selectedIndex].text)
                                }}>

                                <option value="2;1,3">Assignment</option>
                                <option value="3;1,3">Coursework</option>
                                <option value="4;1,3">Essay</option>
                                <option value="9;1,3">Dissertation Msc</option>
                                <option value="16;1,3">Dissertation Phd</option>
                                <option value="1;1,3">Journal Research</option>
                            </select>
                        </div>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Words/Pages</h2>
                            <select required id="country" name="noOfWords">
                                {selectedService =='Assignment' || selectedService=='Coursework' || selectedService=='Essay'?
                               <> <option value="100">1,000 words ~ 3 pages $100</option>
                               <option value="200">2,000 words ~ 6 pages $200</option>
                               <option value="300">3,000 words ~ 9 pages $300</option>
                               <option value="400">4,000 words ~ 12 pages $400</option>
                               <option value="500">5,000 words ~ 15 pages $500</option></>
                               :selectedService =='Dissertation Msc'?
                               <>
                                <option value="1000">10,000 words $1,000</option>
                                <option value="1500">15,000 words $1,500</option>
                                <option value="1750">20,000 words $1,750</option>
                                <option value="2000">25,000 words $2,000 </option>
                              </>:selectedService =='Dissertation Phd'?
                               <>
                                    <option value="4000">15,000 words $4,000</option>
                                    <option value="5500">20,000 words $5,500</option>
                                    <option value="7000">25,000 words $7,000</option>
                                    <option value="8500">30,000 words $8,500 </option>
                              </>:
                                <>
                                    <option value="500">15,000 words $500</option>
                                    <option value="750">2,000 words $750</option>
                                    <option value="1000">3,000 words $1,000</option>
                                    <option value="1250">4,000 words $1,250</option>
                                    <option value="1500">5,000 words $1,500</option>
                                </>
                            }
                                </select>
                        </div>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Tools to use</h2>
                            <select required id="country" name="tools">

                                <option value="NA">None</option>
                                <option value="SPSS">SPSS</option>
                                <option value="STATA">STATA</option>
                                <option value="Eviews">Eviews</option>
                                <option value="Nvivo">Nvivo</option>
                                <option value="Xls Analysis">Xls Analysis</option>
                                <option value="Medical Tool">Medical Tool</option>
                                <option value="NA">None</option>
                            </select>
                        </div>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Whatsapp no</h2>

                            <input required placeholder="Valid whatsapp number" type="text" name="phoneNo"/>
                        </div>

                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Due date</h2>

                            <input required placeholder="Deadine: dd/mm/yy" type="date" name="dueDate"/>
                        </div>

                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>Project file</h2>
                            <input name="customeDoc" required type='file'/>
                        </div>
                        <div className={
                            styles.assignment__form
                        }>
                            <h2 className={
                                styles.header__heading2
                            }>payment receipt</h2>
                            <input name="receipt" required type='file'/>
                        </div>

                        <button type='submit'
                            className={
                                styles.header__btn
                        }>Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
