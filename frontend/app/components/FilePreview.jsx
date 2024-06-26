import React from "react";

const FilePreview = ({ fileData }) => {


    // to handle file uploads
    const uploadFiles = async () => {
        // get the files from the fileList as an array
        let files = fileData.fileList;
        // initialize formData object
        const formData = new FormData();
        // loop over files and add to formData
        files.forEach((file) => formData.append("files", file));

        // Upload the files as a POST request to the server using fetch
        // Note: /api/fileupload is not a real endpoint, it is just an example
        const response = await fetch("/api/fileupload", {
            method: "POST",
            body: formData,
        });

        //successful file upload
        if (response.ok) {
            alert("Files uploaded successfully");
        } else {
            // unsuccessful file upload
            alert("Error uploading files");
        }
    };



    return (
        <div className="flex flex-col justify-center w-full">
            <div>
                {/* loop over the fileData */}
                {fileData.fileList.map((f) => {
                    return (
                        <>
                            <ol>
                                <li key={f.lastModified} >
                                    {/* display the filename and type */}
                                    <div key={f.name}>
                                        {f.name}
                                    </div>
                                </li>
                            </ol>

                        </>
                    );
                })}
            </div>

                {fileData.fileList.length > 0 && (
                    <input
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-full mt-5'
                        type="button"
                        value="Upload"
                        onClick={uploadFiles}
                    />
                )}


        </div>
    );
};

export default FilePreview;
