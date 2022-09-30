import React from "react";
import AddNewGIC from "./AddNewGIC";
import gic from "./gic";
import GICBox from "./GICBox";


export default function Body() {

    const [totalValue, setTotalValue] = React.useState(0.0);
    const [valuePerDay, setValuePerDay] = React.useState(0.0);
    const [inputForm, setInputForm] = React.useState(null);

    let tValue = 0.0; 
    let amountPerDay = 0.0;

    const [gicData, setGicData] = React.useState(gic);



    function incrementTotalValue(value) {
        tValue+= parseFloat(value);
        setTotalValue(tValue);
        console.log(tValue + '$');
    }

    function incrementAmountPerDay(value) {
        amountPerDay += parseFloat(value);
        setValuePerDay(amountPerDay);
        console.log(amountPerDay);
    }

    let boxes = gicData.map(box => (
        <GICBox
                id={box.id}
                initialInvestment={box.initialInvestment}
                gicTermMonth={box.gicTermMonth}
                rate={box.rate}
                investmentDate={box.investmentDate}
                incrementTotalValue={incrementTotalValue}
                incrementAmountPerDay={incrementAmountPerDay}
            />
    ));


    function removeInputField() {
        setInputForm(null);
    }

    function addGIC(newGIC) {
        setGicData(prevGicData => [...prevGicData, {
            id: prevGicData.length+1,
            initialInvestment: newGIC.initialInvestment,
            gicTermMonth: newGIC.gicTermMonth,
            rate: newGIC.rate, 
            investmentDate: newGIC.investmentDate,
        }])
    }
    
    const onAddInputField = event => {
        console.log("btn clicked");
        setInputForm(<AddNewGIC 
            removeInputField={removeInputField}
            addGIC={addGIC}
        />);
    }

    return (
        <div className="gic">
            <h3 className="gic--h3">Total Amount: ${totalValue.toFixed(2) + " ($" + valuePerDay.toFixed(2)+"/day)" }</h3>
            <div className="gic--box">
                <div className="box--addNew" key={0}>
                    <button className="box--addNew--btn" onClick={onAddInputField}>
                        <h3>+ Add</h3>
                        <h3>New GIC</h3>
                    </button>
                </div>
                {boxes}
            </div> 
            {inputForm}
        </div>
    )
}