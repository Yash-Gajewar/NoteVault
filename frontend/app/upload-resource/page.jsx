"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import DropdownBox from "../components/DropdownBox";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FileContainer from "../components/FileContainer";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import axios from "axios";
const firebaseConfig = {
  apiKey: "AIzaSyBh-8G4kOXSBYzcoHzjC_R0QZo8frsZnPY",
  authDomain: "notevault-5684a.firebaseapp.com",
  projectId: "notevault-5684a",
  storageBucket: "notevault-5684a.appspot.com",
  messagingSenderId: "118095513364",
  appId: "1:118095513364:web:07f431474bdc7c100da401",
  measurementId: "G-TNBL9KNV7J",
};

firebase.initializeApp(firebaseConfig);

const Upload = () => {
  const router=useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/upload/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Response", response);
        setCourses(response.data.courses);
      } 
      catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  
  // list of options for rendering different options
  const [courses, setCourses] = useState([]);
  const material = ["Reference Book", "Question Paper", "Notes", "Videos"];
  const type = ["End Sem", "Mid Sem", "In Sem", "Quiz", "Assignment", "Others"];

  // list of years
  const startYear = 1995;
  const currentYear = new Date().getFullYear();

  let years = [];
  for (let i = startYear; i <= currentYear; i++) {
    years.push(i);
  }

  // flag to check which option is selected
  const [isQuestionPaper, setIsQuestionPaper] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isBook, setIsBook] = useState(false);

  // common fields
  const [userCourse, setUserCourse] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [resourceTitle, setResourceTitle] = useState("");

  // book data
  const [bookAuthorName, setBookAuthorName] = useState("");
  const [bookEdition, setBookEdition] = useState(0);

  // paper data
  const [isSpit, setIsSpit] = useState(true);
  const [paperYear, setPaperYear] = useState(0);
  const [paperType, setPaperType] = useState("");

  // video data
  const [videoLink, setVideoLink] = useState("");

  // file data
  const [fileURL, setFileURL] = useState("");
  const [coverPageURL, setCoverPageURL] = useState("");

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);

      fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          setFileURL(downloadURL);
        });
      });
    } else {
      console.log("No file selected");
    }
  };

  const handleCoverPageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);

      fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          setFileURL(downloadURL);
          setCoverPageURL(downloadURL);
        });
      });
    } else {
      console.log("No file selected");
    }
  };

  const uploadClicked = async () => {
    try {
      const dataToUpload = {
        title: resourceTitle,
        file: fileURL,
        coverPage: coverPageURL,
        course: userCourse,
        material_type: materialType,
        author: bookAuthorName,
        edition: bookEdition,
        year: paperYear,
        category: paperType,
        link: videoLink,
      };
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/upload/",
        dataToUpload,
        {
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log("res", response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <h1 className="text-3xl font-semibold underline ml-10 mt-5">
        Upload Resource
      </h1>

      <div className="flex flex-row justify-center w-full h-full mt-5 space-x-0 ">
        {/* form  */}
        <div className="w-2/6 flex flex-col">
          <DropdownBox
            title="Course"
            options={courses}
            mt={5}
            setUserCourse={setUserCourse}
          />

          <DropdownBox
            title="Material Type"
            options={material}
            setIsQuestionPaper={setIsQuestionPaper}
            setIsLink={setIsLink}
            setBook={setIsBook}
            setMaterialType={setMaterialType}
            mt={5}
            mb={5}
          />

          {isQuestionPaper ? (
            <div className="flex flex-col w-full mb-5">
              <div className="mb-1">This Question Paper belongs to?</div>
              <div className="flex flex-row justify-left w-2/3 mb-4">
                <div className="mr-7">
                  <input
                    type="radio"
                    value="SPIT"
                    name="paper"
                    onChange={(e) => setIsSpit(e.target.value === "SPIT")}
                  />{" "}
                  SPIT
                </div>
                <div>
                  <input
                    type="radio"
                    value="Other"
                    name="paper"
                    onChange={(e) => setIsSpit(e.targetvalue === "SPIT")}
                  />{" "}
                  Other University
                </div>
              </div>
              <div className="flex flex-row w-1/2">
                <div className="w-full">
                  <DropdownBox
                    title="Year"
                    options={years}
                    setPaperYear={setPaperYear}
                  />
                </div>

                <div className="w-full">
                  <DropdownBox
                    title="Type"
                    options={type}
                    setPaperType={setPaperType}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {isLink ? (
            <div className="flex flex-col w-full mb-5">
              <input
                className="flex h-10 w-2/3 rounded-md border border-black bg-transparent px-3 py-2 text-sm "
                type="text"
                id="link"
                placeholder="Paste link here"
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}

          {isBook ? (
            <div className="flex flex-col w-full mb-5">
              <input
                className="flex h-10 w-1/2 rounded-md border border-black bg-transparent px-3 py-2 text-sm "
                type="text"
                id="author"
                placeholder="Author Name"
                onChange={(e) => setBookAuthorName(e.target.value)}
              />

              <div className="flex flex-col w-full mt-5">
                <input
                  className="flex h-10 w-1/2 rounded-md border border-black bg-transparent px-3 py-2 text-sm "
                  type="number"
                  id="edition"
                  placeholder="Edition"
                  onChange={(e) => setBookEdition(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <></>
          )}

          <input
            className="flex h-10 w-2/3 rounded-md border border-black bg-transparent px-3 py-2 text-sm"
            type="text"
            id="title"
            placeholder="Enter title"
            onChange={(event) => {
              setResourceTitle(event.target.value);
            }}
          />

          {/* upload button */}
          <button
            type="button"
            className="rounded-md w-1/4 mt-5 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={uploadClicked}
          >
            Upload
          </button>
        </div>

        {/* upload doc and cover page div  */}

        {!isLink ? (
          <div className="flex flex-row h-max-1/4">
            {/* upload Doc div */}

            <div className="flex flex-col items-center justify-center border-2 border-dashed border-black rounded-md">
              <div>Upload Document Here</div>
              <input
                type="file"
                className="pl-2 mt-5 justify-center" 
                onChange={handleFileUpload}
              />
            </div>

            <div className="flex flex-col items-center justify-center ml-10 border-2 border-dashed border-black rounded-md">
              <div>Upload Cover-Page Here</div>
              <input
                type="file"
                className="pl-2 mt-5 justify-center"
                onChange={handleCoverPageUpload}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Upload;