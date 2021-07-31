import React, { useRef, useState } from "react";
import styles from "../styles/paymentstyles.module.css";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

export default function payment() {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <div className={styles.payment_container}>
      <div className={styles.payment__body}>
        <div className={styles.payment__header}>
          <div className={styles.payment__header_text}>
            <h2>We are Trusted by educational systems in the word</h2>
          </div>
          <div className={styles.payment__header_body}>
            <h2 className={styles.header__heading2}>
              Instant Checkout Assistance
            </h2>
            <p className={styles.header__paragraph}>
              <Image src="/phone.svg" width={20} height={20} alt="whatsapp" />{" "}
              +905338492453
            </p>
            <p className={styles.header__paragraph}>
              <Image
                src="/whatsapp.svg"
                width={20}
                height={20}
                alt="whatsapp"
              />{" "}
              +905338492453
            </p>
          </div>
        </div>
        <div className={styles.payment__banner}>
          <h2 className={styles.header__h2}>
            Proudly Uks Most Trusted Dissertation & Coursework Writing Company,
            Since 2021
          </h2>
        </div>
        <div className={styles.payment__jackpot}>
          <h3 className={styles.header__h3}>
            Jackpot! Your Order is Covered Under Our Guaranteed Grades Or Money
            Back Offer!
          </h3>
          <p className={styles.header__paragraph}>
            For Everything its just $2255 &#8594;
            <span className={styles.header__span}> $1745 Only!</span>
          </p>
        </div>
        <div className={styles.payment__table1}>
          <h2 className={styles.header__heading2}>Pay As You Go</h2>
        </div>
        <div className={styles.header__pay}>
          <table>
            <tr>
              <th>Sr. No.</th>
              <th>Deliverable</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>1st Instalment</td>
              <td>To Get Started</td>
              <td>
                <input type="date" />
              </td>
              <td>
                $ &nbsp; <input placeholder="872" disabled /> &ensp;{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="check mark"
                  className={styles.checkmark}
                />
              </td>
            </tr>
            <tr>
              <td>2nd Instalment</td>
              <td>Directly after 1749 words</td>
              <td>
                <input type="date" placeholder="date" />
              </td>
              <td>
                $ &nbsp; <input placeholder="$" />
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.payment__order_text}>
          <h2 className={styles.header__h2}>
            {" "}
            Quick Order Summary &#8594; &ensp;DEAL OF THE DAY!
          </h2>
        </div>
        <div className={styles.header__order}>
          <div className={styles.header__order_body}>
            <div className={styles.header__summary}>
              <table>
                <tr>
                  <td>1st Instalment</td>
                  <td>To Get Started</td>
                </tr>
                <tr>
                  <td>Deliverable</td>
                  <td>3500 words</td>
                </tr>
                <tr>
                  <td>Deadline</td>
                  <td>30/07/2021</td>
                </tr>
                <tr>
                  <td>Writecheck Turnitin Plagiarism Report</td>
                  <td>Complimentary</td>
                </tr>
                <tr>
                  <td>Access to Writer</td>
                  <td>Complimentary</td>
                </tr>
                <tr>
                  <td>Whatsapp Support </td>
                  <td>Complimentary</td>
                </tr>
                <tr>
                  <td>Unlimited Revisions</td>
                  <td>Complimentary</td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>$2255</td>
                </tr>
                <tr>
                  <td>Additional First Order Discount</td>
                  <td>- $170</td>
                </tr>
                <tr>
                  <td>VAT +5%</td>
                  <td>As Actual</td>
                </tr>
              </table>
              <div className={styles.summary__header}>
                <h2 className={styles.header__h2}>
                  Total Investment: Just $1745!
                </h2>
                <h3 className={styles.header__h3_3}>
                  Guaranteed Selected Grades or Your Money Back
                </h3>
              </div>
              <div className={styles.payment_head}>
                <h2 className={styles.head2}>Now Payable</h2>
                <h2 className={styles.head2_2}>Just $872</h2>
              </div>
            </div>
            <div className={styles.header__form_payment}>
              <div className={styles.form_payment_header}>
                <h2 className={styles.header__heading2}>
                  Fully Furnished 3500 words Assignment + STATA!
                </h2>
                <p className={styles.header__paragraph}>
                1. Weekly Drafts 2. FREE Turnitin Report 3. 100% Confidentiality
                </p>
                <p className={styles.header__paragraph}>
                  2. Guaranteed Grades 5. Fully Furnished Ready for Submission Work
                </p>
              </div>
              <div className={styles.payment__select}>
                <table>
                  <tr>
                    <td>
                      <h2 className={styles.header__paragraph}>
                        Choose the grade you wish to score
                      </h2>
                    </td>
                    <td>
                      <select id="country" name="country">
                        <option>Select you expected Grade</option>
                        <option value="Average">Average</option>
                        <option value=" First Class"> First Class</option>
                        <option value="Merit">Merit</option>
                        <option value="Distinction">Distinction</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className={styles.header__paragraph}>
                        Kindly select the referencing style
                      </h2>
                    </td>
                    <td>
                      <select id="country" name="country">
                        <option>Select the preferred referencing style</option>
                        <option value="American Meteorological Society (AMS)">
                          American Meteorological Society (AMS)
                        </option>
                        <option value="APA">APA</option>
                        <option value="MLA">MLA</option>
                        <option value="Harvard">Harvard</option>
                        <option value="OSCOLA">OSCOLA</option>
                        <option value="Chicago">Chicago</option>
                        <option value="MHRA referencing for English Literature">
                          MHRA referencing for English Literature
                        </option>
                        <option value="MHRA referencing for Film, Theatre and Television">
                          MHRA referencing for Film, Theatre and Television
                        </option>
                        <option value="Oxford referencing">
                          Oxford referencing
                        </option>
                        <option value="Vancouver (numeric) referencing">
                          Vancouver (numeric) referencing
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className={styles.header__paragraph}>
                        Please Upload Your Assignment Guidelines Here
                      </h2>
                    </td>
                    <td>
                      <div className={styles.payment__pick}>
                        <input
                          type="file"
                          className={styles.payment_filetype}
                          placeholder="Choose your desired file"
                        />
                        <Link href="/signup">
                          <a className={styles.upload__btn}>Upload file</a>
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className={styles.header__paragraph}>
                        Feel free to write your inputs & special requests in
                        this box
                      </h2>
                    </td>
                    <td>
                      <textarea
                        rows="4"
                        cols="50"
                        className={styles.inputmessage}
                        placeholder="Pls. write your inputs here"
                      />
                    </td>
                  </tr>
                </table>
              </div>

              <div className={styles.payment__box}>
                <table>
                  <tr>
                    <td>
                      <Image
                        src="/bitcoin.png"
                        alt="bitcoin"
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>
                      <h2 className={styles.header__heading2}>
                        We Accept Bitcoin for online payments{" "}
                      </h2>
                    </td>
                    
                  </tr>
                </table>
              </div>
              <div className={styles.payment__box1}>
                <h2 className={styles.header__paragraph}>
                  Please send to this address
                </h2>
                <div className={styles.payment_copy}>
                  <input
                    ref={textAreaRef}
                    value="128yAJaNsKdKDK8YULWgHY3MncYQTnmAaR"
                    className={styles.payment__input}
                    placeholder="Bitcoin address"
                  />
                  <div>
                    <button onClick={copyToClipboard}>
                      <Image
                        src="/copy.svg"
                        alt="copy"
                        width={25}
                        height={25}
                      />
                    </button>
                    {copySuccess}
                  </div>
                </div>
              </div>
              <div className={styles.payment__box2}>
                <div className={styles.payment__box2_1}>
                  <h2 className={styles.header__paragraph}>
                    Or scan the QR code
                  </h2>
                  <Image
                    src="/frame.png"
                    alt="bitcoin scanner"
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles.payment__btc}>
                  <h2 className={styles.header__paragraph}>Total</h2>
                  <h1 className={styles.header__heading1}>872.00 USD</h1>
                  <h2 className={styles.header__paragraph}>Amount</h2>
                  <h1 className={styles.header__heading1}>0.026 BTC</h1>
                </div>
              </div>

              <div className={styles.payment__box3}>
                <h2 className={styles.header__paragraph}>
                  Upload Payment Reciept
                </h2>
                <input type="file" className={styles.payment__input} placeholder="chooose your desired file"/>
              </div>
              <div className={styles.payment__box4}>
                <Link href="/dashboard/work">
                  <a className={styles.upload__btn}>Payment Sent!</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
