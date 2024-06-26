import FilePreview from "./FilePreview";

const DropZone = ({ data, dispatch }) => {

    // onDragEnter sets inDropZone to true
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
    };

    // onDragLeave sets inDropZone to false
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    };

    // onDragOver sets inDropZone to true
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // set dropEffect to copy i.e copy of the source item
        e.dataTransfer.dropEffect = "copy";
        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
    };

    // onDrop sets inDropZone to false and adds files to fileList
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // get files from event on the dataTransfer object as an array
        let files = [...e.dataTransfer.files];

        // ensure a file or files are dropped
        if (files && files.length > 0) {
            // loop over existing files
            const existingFiles = data.fileList.map((f) => f.name);
            // check if file already exists, if so, don't add to fileList
            // this is to prevent duplicates
            files = files.filter((f) => !existingFiles.includes(f.name));

            // dispatch action to add droped file or files to fileList
            dispatch({ type: "ADD_FILE_TO_LIST", files });
            // reset inDropZone to false
            dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
        }
    };

    // handle file selection via input element
    const handleFileSelect = (e) => {
        // get files from event on the input element as an array
        let files = [...e.target.files];

        // ensure a file or files are selected
        if (files && files.length > 0) {
            // loop over existing files
            const existingFiles = data.fileList.map((f) => f.name);
            // check if file already exists, if so, don't add to fileList
            // this is to prevent duplicates
            files = files.filter((f) => !existingFiles.includes(f.name));

            // dispatch action to add selected file or files to fileList
            dispatch({ type: "ADD_FILE_TO_LIST", files });
        }
    };

    return (
        <>
            <div
                className="flex flex-col mt-5 text-transparent"
                onDragEnter={(e) => handleDragEnter(e)}
                onDragOver={(e) => handleDragOver(e)}
                onDragLeave={(e) => handleDragLeave(e)}
                onDrop={(e) => handleDrop(e)}
            >

                <input
                    id="fileSelect"
                    type="file"
                    multiple
                    onChange={(e) => handleFileSelect(e)}
                />

            </div>
           
            {/* Pass the selectect or dropped files as props */}
            <FilePreview fileData={data} />
        </>
    );
};

export default DropZone;