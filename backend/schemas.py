from pydantic import BaseModel

class UserBase(BaseModel):
    username: str
    password : str
    isTeacher: bool = False

class UserLogin(BaseModel):
    username: str
    password: str


class ReferenceBookBase(BaseModel):
    course: str
    author: str
    edition: str
    title: str
    file: str
    cover_page: str
    uploaded_by: str
    approved_by: str = None
    is_approved: bool = False


class QuestionPaperBase(BaseModel):
    course: str
    title: str
    file: str
    cover_page: str
    uploaded_by: str
    approved_by: str
    year: str
    type: str = None
    is_approved: bool = False
    isSpit : bool = True


class NotesBase(BaseModel):
    course: str
    title: str
    file: str
    cover_page: str
    uploaded_by: str
    approved_by: str
    is_approved: bool = False


class VideoBase(BaseModel):
    course: str
    title: str
    link: str
    uploaded_by: str
    approved_by: str
    is_approved: bool = False