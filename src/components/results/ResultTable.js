import React from 'react';
import {Link} from 'react-router-dom';

const ResultTable = (props) => {
    const marksCalculate = (marks) => {
        let total = 0;
        var maths = parseInt(marks.Maths);
        var english = parseInt(marks.English) ;
        var science = parseInt(marks.Science);
        total += maths + english + science
        return total

    }

    const stausCheck = (marks) => {
        let total = 0;
        var maths = parseInt(marks.Maths);
        var english = parseInt(marks.English) ;
        var science = parseInt(marks.Science);
        total += maths + english + science;
        if(maths < 20 || english < 20 || science < 20) {
            return <span style={{color:'red'}}>Failed</span>
        } else if(total >= 120) {
              return <span style={{color:'green'}} >Topper</span>
            } else {
            return <span>Passed</span>
        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const renderTable = () => (  
        props.datas.sort((a, b) => {
            const One = a.name.toUpperCase();
            const Two = b.name.toUpperCase();
        
            return (One < Two) ? -1 : (One > Two) ? 1 : 0;
          }).map(data =>(
        <tr key={data.id}>
            <td >{capitalizeFirstLetter(data.name)}</td>
            <td >{data.rollNumber}</td>
            <td >{marksCalculate(data.marks)}</td>
            <td >{stausCheck(data.marks)}</td>
        </tr>
        ) )
        
    )

    
    return (
        <div>
            <h2>Student Result Board</h2>
            <table>
                <thead> 
                    <tr>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Total Marks</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{renderTable()}</tbody>   
            </table> 
            <br />
            <br />
            <Link to="/admission"><button>Go to Admission</button></Link>
        </div>
    )
}

export default ResultTable;
