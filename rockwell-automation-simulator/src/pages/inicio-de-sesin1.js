import styles from "./inicio-de-sesin1.module.css";
import React from 'react';
import RegistrationForm from './RegistrationForm';

const InicioDeSesin1 = () => {
  return (
    <div className={styles.inicioDeSesin}>
      <img className={styles.bg2Icon} alt="" src="/bg2@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.completeYourProfileWrapper}>
          <h1 className={styles.completeYourProfile}>COMPLETE YOUR PROFILE</h1>
        </div>
        <div className={styles.emailField}>
          <div className={styles.nameFields}>
            <h2 className={styles.enterYourInformation}>
              Enter your information so we are able to recommend you
              personalized options and contact you
            </h2>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>
                <div className={styles.nameWrapper}>
                  <h3 className={styles.name}>Email</h3>
                </div>
                <div className={styles.emailInner}>
                  <input
                    className={styles.frameChild}
                    placeholder="Enter your company email"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className={styles.secondaryForm}>
              <div className={styles.email1}>
                <div className={styles.nameContainer}>
                  <h3 className={styles.name1}>Password</h3>
                </div>
                <div className={styles.emailChild}>
                  <input
                    className={styles.frameItem}
                    placeholder="Enter your password"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.secondaryFormInner}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                  <div className={styles.frameChild3} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.emailContainer}>
              <div className={styles.email2}>
                <div className={styles.nameFrame}>
                  <h3 className={styles.name2}>Location</h3>
                </div>
                <div className={styles.frameDiv}>
                  <input
                    className={styles.frameInput}
                    placeholder="Enter your password"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className={styles.email3}>
              <div className={styles.nameWrapper1}>
                <h3 className={styles.name3}>Industry</h3>
              </div>
              <div className={styles.emailInner1}>
                <input
                  className={styles.frameChild4}
                  placeholder="Selecy your target Indyustry"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.primaryButton}>
          <div className={styles.primaryButton1}>
            <h2 className={styles.createAccount}>Create Account</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioDeSesin1;
