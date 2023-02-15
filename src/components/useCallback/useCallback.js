import React, { useState , useCallback} from 'react'
import Count from './Count'
import Button from './Button'

const CallBack=()=>{

    const [age,setAge]=useState(22);
    const [salary,setSalary]=useState(500000);

    const incrementAge=useCallback(()=>{
        setAge(age+1);
    },[age]);

    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    
    return(
        <>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}> increment Age </Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}> increment Salary </Button>
        </>
    )
}

export default CallBack