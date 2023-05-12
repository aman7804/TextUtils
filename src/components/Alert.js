import React,{useState} from "react";
export default function Alert(props){
    return(
        <>
            props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong></strong>{props.alert.message}
                <button type="button" className="btn-close mx-2" style={{padding:"10px"}} data-bs-dismiss="alert" aria-label="Close">
                    {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
        </>
    )
}