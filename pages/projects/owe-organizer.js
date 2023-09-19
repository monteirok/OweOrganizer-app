import { useState } from "react";
import Head from 'next/head';
import oweOrgStyles from '../../styles/owe-org.module.css';

export default function Home() {
  const [currentInput, setCurrentInput] = useState("");
  const [totalK, setTotalK] = useState(0);
  const [totalB, setTotalB] = useState(0);
  const [currentPerson, setCurrentPerson] = useState(1);
  const [difference, setDifference] = useState(null);
  const [person, setPerson1] = useState(null);

  // handle ADD
  const handleAdd = () => {
    if (currentPerson === 1) {
      setTotalK(prev => prev + parseFloat(currentInput));
    } else {
      setTotalB(prev => prev + parseFloat(currentInput));
    }
    setCurrentInput("");  // Clear the input field
  };

  // handle NEXT
  const handleNext = () => {
    if (currentPerson === 1) {
      setCurrentPerson(2);
    } 
    else {
      var largerAmnt;
      var smallerAmnt;
      var diff;
      var person;

      if (totalK > totalB) {
        largerAmnt='k';
        smallerAmnt='b';
      }
      else {
        largerAmnt='b';
        smallerAmnt='k';
      }
      
      if (largerAmnt === 'k') {
        diff=Math.abs(totalK - totalB);
        person='Karsten';
      }
      else {
        diff=Math.abs(totalB - totalK);
        person='Bryce';
      }

      // const diff = Math.abs(totalK - totalB);
      setDifference(diff);
      alert("lrg: " + largerAmnt + " || sml: " + smallerAmnt + " || diff: " + diff);
    }
  };

  // RETURN
  return (
    <>
      <Head>
        <title>Owe Organizer | kmDev</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      {/* owe organizer container */}
      <div className={`${oweOrgStyles.oweOrgContainer} ${oweOrgStyles.center}`}><div/>
        {/* header */}
        <h1 className={`${oweOrgStyles.oweOrgTitle} ${oweOrgStyles.center}`}>OWE</h1>
        <h1 className={`${oweOrgStyles.oweOrgSubTitle} ${oweOrgStyles.oweOrgH2} ${oweOrgStyles.center}`}>ORGANIZER</h1>
        {/* input-btn container */}
        <div className={oweOrgStyles.inputBtnContainer}>
          {/* input container */}
          <div className={`${oweOrgStyles.center} ${oweOrgStyles.inputContainer}`}>
            <input className={oweOrgStyles.input} type="number" value={currentInput} onChange={(e) => setCurrentInput(e.target.value)} placeholder="$" />
          </div>
          <span className={oweOrgStyles.spacer}></span>
          {/* button container */}
          <div className={oweOrgStyles.btnContainer}>
            <button className={oweOrgStyles.btn} onClick={handleAdd}>Add</button>
            {/* <button onClick={handleNext}> {currentPerson === 1 ? "Next" : "Calculate Difference"}</button> */}
            <button className={oweOrgStyles.btn} onClick={handleNext}> {currentPerson === 1 ? "Next" : "Done"}</button>
          </div>
        </div>
        {/* total owing container */}
        <div className={`${oweOrgStyles.center} ${oweOrgStyles.totalContainer}`}>
          <h6 className={oweOrgStyles.totalOwedText}>Total Owed:</h6>
          <h6 className={oweOrgStyles.totalText}>Karsten: ${totalK}</h6>
          <h6 className={oweOrgStyles.totalText}>Bryce: ${totalB}</h6>
          {difference !== null && <p className={oweOrgStyles.finalOwing}>${person} owes: ${difference}</p>}
        </div>
      </div>
    </>
  );
}