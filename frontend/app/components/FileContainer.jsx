import React from "react";
import DropZone from "./DropZone";
import Head from "next/head";
import { useReducer } from "react";
import Image from "next/image";

const FileContainer = () => {

    // reducer function to handle state changes
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_IN_DROP_ZONE":
                return { ...state, inDropZone: action.inDropZone };
            case "ADD_FILE_TO_LIST":
                return { ...state, fileList: state.fileList.concat(action.files) };
            default:
                return state;
        }
    };

    // destructuring state and dispatch, initializing fileList to empty array
    const [data, dispatch] = useReducer(reducer, {
        inDropZone: false,
        fileList: [],
    });

    return (
        <div className="flex flex-col border-black border-2 p-5 border-dashed h-full w-full" >
            <div className="flex w-full justify-center text-lg">
                Drag And Drop File Upload
            </div>

            <div className="flex w-full justify-center mt-5">
            <Image
                src="/upload.png"
                width={150}
                height={150}
                alt="Accept Button"
                
            />
            </div>

            <main >
                {/* Pass state data and dispatch to the DropZone component */}
                <DropZone data={data} dispatch={dispatch} />
            </main>
        </div>
    );
}



export default FileContainer