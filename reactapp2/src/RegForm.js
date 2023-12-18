import React, {useState} from 'react'

export default function RegForm() {
    const [inputs, setInputs] = useState({});
    const changeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputs.fname + "\n" + inputs.email + "\n" + inputs.phone + "\n" + inputs.address + "\n" + inputs.gender + "\n" + inputs.district);
      }
    console.log(inputs);
  return (
    <div className='container'>
        <h2>Registration Form</h2>
        <form action="" onSubmit={handleSubmit} >
            <label htmlFor="">Name: </label><br />  
            <input type="text" name='fname' value={inputs.fname} onChange={changeHandler} /><br />

            <label htmlFor="">Email: </label><br />
            <input type="email" name='email' value={inputs.email} onChange={changeHandler} /><br />

            <label htmlFor="">Phone: </label><br />
            <input type="number" name='phone' value={inputs.phone} onChange={changeHandler} /><br />

            <label htmlFor="">Address: </label><br />
            <textarea name="address" id="" cols="30" rows="10" value={inputs.address} onChange={changeHandler} ></textarea><br />

            <label htmlFor="">Gender</label><br />
            <input type="radio" name='gender' value="Male" onChange={changeHandler} />
            <label htmlFor="">Male</label>
            <input type="radio" name="gender" value="Female" onChange={changeHandler} id="" />
            <label htmlFor="">Female</label>
            <br />

            <label htmlFor="">District: </label><br />
            <select name="district" onChange={changeHandler} id="">
                <option value="">Select One</option>
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Barishal</option>
                <option>Rajshahi</option>
            </select><br /><br />

            <input type="submit" name='submit' value="SUBMIT" />
        </form>
    </div>
  )
}
