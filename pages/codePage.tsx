import { redirect, useRouter } from "next/navigation"
import styles from "@/styles/Home.module.css";
import { useState } from "react";



type State = {
    "A1": string, 
    "A2": string, 
    "A3": string, 
    "B1": string, 
    "B2": string, 
    "B3": string, 
    "C1": string, 
    "C2": string, 
    "C3": string, 
    "D1": string, 
    "D2": string
}

let answerState: State = {
    "A1": "2", 
    "A2": "7", 
    "A3": "5", 
    "B1": "11", 
    "B2": "1", 
    "B3": "9", 
    "C1": "6", 
    "C2": "8", 
    "C3": "3", 
    "D1": "4", 
    "D2": "10"
}

export default function CodePage() {
    const router = useRouter();

    let [state, setState] = useState({"A1": "", 
    "A2": "", 
    "A3": "", 
    "B1": "", 
    "B2": "", 
    "B3": "", 
    "C1": "", 
    "C2": "", 
    "C3": "", 
    "D1": "", 
    "D2": ""
} as State);

let changedState = (stateItem: string) => (e: any) => {
    let newState = {...state, [stateItem]: e.target.value.trim()}
    console.log(newState);

    let isEqual = Object.keys(answerState).every(key => {
        let k = key as keyof State;
        return answerState[k] == newState[k];
    })
    console.log(newState, answerState)

    if(isEqual){
        alert("Correct!");
        router.push('/codeWasCorrect');
    }

    setState(newState);
}

console.log(state);

  return <div className={styles.mainDiv}>
    <div>
        Enter your answers here.
    </div>
    <form>
        <div>
            <label>A1</label>
            <input onChange={changedState("A1")} value={state.A1}></input>
        </div>
        <div>
            <label>A2</label>
            <input onChange={changedState("A2")} value={state.A2}></input>
        </div>
        <div>
            <label>A3</label>
            <input onChange={changedState("A3")} value={state.A3}></input>
        </div>
        <div>
            <label>B1</label>
            <input onChange={changedState("B1")} value={state.B1}></input>
        </div>
        <div>
            <label>B2</label>
            <input onChange={changedState("B2")} value={state.B2}></input>
        </div>
        <div>
            <label>B3</label>
            <input onChange={changedState("B3")} value={state.B3}></input>
        </div>
        <div>
            <label>C1</label>
            <input onChange={changedState("C1")} value={state.C1}></input>
        </div>
        <div>
            <label>C2</label>
            <input onChange={changedState("C2")} value={state.C2}></input>
        </div>
        <div>
            <label>C3</label>
            <input onChange={changedState("C3")} value={state.C3}></input>
        </div>
        <div>
            <label>D1</label>
            <input onChange={changedState("D1")} value={state.D1}></input>
        </div>
        <div>
            <label>D2</label>
            <input onChange={changedState("D2")} value={state.D2}></input>
        </div>
    </form>
  </div>
}
