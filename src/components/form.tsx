import React from 'react'

export default function Form() {
  return (
    <div className='FromDiv'>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="name"  placeholder='Name' />

            <label htmlFor="name">Email Subject</label>
            <input type="email" placeholder='Email Subject' />

            <label htmlFor="name">Email Body</label>
            <textarea name="emailbody" placeholder='Type Massage'></textarea>

            <input type="datetime-local" id="birthdaytime" name="birthdaytime"></input>

            {/* <label htmlFor="name">Cho</label> */}
            <input type="file" />

            <div className='btnDiv'>
                <button type='submit'> Submit </button>
            </div>
        </form>
    </div>
  )
}
