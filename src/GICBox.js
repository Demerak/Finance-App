import React from "react";

export default function GICBox(props) {

    
    const dayDiff = getDayDiff();
    const value = gicValue();
    const maturityDate = calcMaturyDate();
    const increasePerDay = amountPerDay();

    props.incrementTotalValue(value);
    props.incrementAmountPerDay(increasePerDay);

    function gicValue() {
        const value = props.initialInvestment * (1 + ((props.rate / 100) / 365) * (dayDiff));
        return value.toFixed(2); 
    }

    function getDayDiff() {
        const t = new Date();
        const today = new Date(t.getFullYear(), t.getMonth(), t.getDate());
        const diffTime = Math.abs(today- props.investmentDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    function calcMaturyDate() {
        let maturityDate = new Date(props.investmentDate);
        let d = new Date(maturityDate.setMonth(maturityDate.getMonth() + props.gicTermMonth));
        return d.toLocaleDateString('en-US');
    }

    function amountPerDay() {
        const value = props.initialInvestment * ((props.rate /100) / 365);
        return value.toFixed(2); 
    }

    return (
        <div className="box" key={props.id}>
            <h4 className="box--h4">{"Total balance: $" + value}</h4>
            <div className="box--stats">
                <p>{"Initial Investment:  $" + props.initialInvestment}</p>
                <p>{"GIC Rate: " + props.rate + "%"}</p>
                <p>{"Maturity Date: " + maturityDate} </p>
            </div>
        </div>
    )
}

