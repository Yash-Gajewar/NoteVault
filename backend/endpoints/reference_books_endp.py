from fastapi import Depends, status, APIRouter, HTTPException
from typing import Annotated
from database import SessionLocal, engine
from sqlalchemy.orm import Session
import models
from schemas import ReferenceBookBase
models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

dp_dependency = Annotated[Session, Depends(get_db)]


router = APIRouter(
    prefix="/api/reference_books",
    tags=["reference_books"],
    responses={404: {"description": "Not found"}},
)


@router.post("/reference_books", status_code=status.HTTP_201_CREATED)
async def create_reference_book(reference_book: ReferenceBookBase, db: Session = Depends(get_db)):
    db_reference_book = models.ReferenceBook(
        course=reference_book.course,
        author=reference_book.author,
        edition=reference_book.edition,
        title=reference_book.title,
        file=reference_book.file,
        cover_page=reference_book.cover_page,
        uploaded_by=reference_book.uploaded_by,
        approved_by=reference_book.approved_by,
        is_approved=reference_book.is_approved
    )
    db.add(db_reference_book)
    db.commit()
    db.refresh(db_reference_book)
    return db_reference_book



@router.get("/reference_books", status_code=status.HTTP_200_OK)
async def get_reference_books_by_title(title: str, db: Session = Depends(get_db)):
    books = db.query(models.ReferenceBook).filter(models.ReferenceBook.title == title).all()
    if not books:
        raise HTTPException(status_code=404, detail="No books found with the given title")
    return books


@router.get("/reference_books/by_course", status_code=status.HTTP_200_OK)
async def get_reference_books_by_author(course: str, db: Session = Depends(get_db)):
    books = db.query(models.ReferenceBook).filter(models.ReferenceBook.course == course).all()
    if not books:
        raise HTTPException(status_code=404, detail="No books found by the given author")
    return books


@router.get("/reference_books/by_author", status_code=status.HTTP_200_OK)
async def get_reference_books_by_author(author: str, db: Session = Depends(get_db)):
    books = db.query(models.ReferenceBook).filter(models.ReferenceBook.author == author).all()
    if not books:
        raise HTTPException(status_code=404, detail="No books found by the given author")
    return books


@router.delete("/reference_books/{reference_book_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_reference_book(reference_book_id: int, db: Session = Depends(get_db)):
    book = db.query(models.ReferenceBook).filter(models.ReferenceBook.id == reference_book_id).first()
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    
    db.delete(book)
    db.commit()
    
    return {"detail": "Book deleted successfully"}
