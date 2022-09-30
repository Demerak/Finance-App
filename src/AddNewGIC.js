import React from "react";

export default function AddNewGIC(props) {
    const [newGIC, setNewGIC] = React.useState(
        {
        initialInvestment: null,
        gicTermMonth: null,
        rate: null, 
        investmentDate: null,
    });

    function handleChange(event) {
        setNewGIC(prevForm => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="addNewGic--div"> 
            <form className="addNewGic--form">
                <input 
                    className="addNewGic--input"
                    type="number"
                    placeholder="How much did you invest?"
                    onChange={handleChange}
                    name="initialInvestment"
                    value={newGIC.initialInvestment}
                />
                <input 
                    className="addNewGic--input"
                    type="number"
                    placeholder="What's the GIC term (in month)?"
                    onChange={handleChange}
                    name="gicTermMonth"
                    value={newGIC.gicTermMonth}
                />
                <input 
                    className="addNewGic--input"
                    type="number"
                    placeholder="What's the GIC rate (in %)?"
                    onChange={handleChange}
                    name="rate"
                    value={newGIC.rate}
                />
                <input 
                    className="addNewGic--input"
                    type="date"
                    placeholder="When did you purchased that GIC?"
                    onChange={handleChange}
                    name="investmentDate"
                    value={newGIC.investmentDate}
                />
                <button className="addNewGic--btn" onClick={props.removeInputField}>Cancel</button>
                <button className="addNewGic--btn" onClick={props.addGIC}>Submit</button>  
            </form>
            
        </div>
    )

}