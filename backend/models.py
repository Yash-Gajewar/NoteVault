from sqlalchemy import Boolean, Column, Integer, String, TEXT, Null
from database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True)
    password = Column(String(50))
    isTeacher = Column(Boolean, default=False)



class ReferenceBook(Base):
    __tablename__ = "reference_books"
    id = Column(Integer, primary_key=True, index=True)
    course = Column(String(50))
    author = Column(String(50))
    edition = Column(String(50))
    title = Column(String(100))
    file = Column(TEXT(4294000000))
    cover_page = Column(TEXT(4294000000))
    uploaded_by = Column(String(50))
    approved_by = Column(String(50), nullable=True)
    is_approved = Column(Boolean, default=False)


class QuestionPaper(Base):
    __tablename__ = "question_papers"
    id = Column(Integer, primary_key=True, index=True)
    course = Column(String(50))
    title = Column(String(50))
    file =  Column(TEXT(4294000000))
    cover_page = Column(TEXT(4294000000))
    uploaded_by = Column(String(50))
    approved_by = Column(String(50), nullable=True, default = Null)
    year = Column(String(50))
    type = Column(String(50))
    is_approved = Column(Boolean, default=False)
    isSpit = Column(Boolean, default=True)


class Notes(Base):
    __tablename__ = "notes"
    id = Column(Integer, primary_key=True, index=True)
    course = Column(String(50))
    title = Column(String(50))
    file = Column(TEXT(4294000000))
    cover_page = Column(TEXT(4294000000))
    uploaded_by = Column(String(50))
    approved_by = Column(String(50), nullable=True, default = Null)
    is_approved = Column(Boolean, default=False)


class Video(Base):
    __tablename__ = "videos"
    id = Column(Integer, primary_key=True, index=True)
    course = Column(String(50))
    title = Column(String(50))
    link = Column(String(50))
    uploaded_by = Column(String(50))
    approved_by = Column(String(50), nullable=True, default = Null)
    is_approved = Column(Boolean, default=False)