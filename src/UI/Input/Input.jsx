import React from 'react'

function Input(props) {
    let input = null
    //     | "button"
    //     | "checkbox"
    //     | "color"
    //     | "date"
    //     | "datetime-local"
    //     | "email"
    //     | "file"
    //     | "hidden"
    //     | "image"
    //     | "month"
    //     | "number"
    //     | "password"
    //     | "radio"
    //     | "range"
    //     | "reset"
    //     | "search"
    //     | "submit"
    //     | "tel"
    //     | "text"
    //     | "time"
    //     | "url"
    //     | "week"
    switch (props.type) {

        default:
            input =
                <input onChange={props.onChange} type={props.type} className='relative  border border-1 border-[#C1C1C1] rounded-sm ' style={{ borderColor: props.error ? 'red' : '#C1C1C1' }} />
            break;
    }

    return (
        <div className='relative w-full p-1 py-5'>
            <p className='relative w-full text-black '>
                {props.placeholder} :
            </p>
            <div className='relative  px-5'>
                {
                    input
                }
            </div>
            {
                props.error &&
                <p className='relative w-full text-red-800'>
                    {props.error}
                </p>
            }
        </div>
    )
}

export default Input