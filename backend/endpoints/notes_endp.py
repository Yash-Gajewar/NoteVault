from fastapi import Depends, status, APIRouter, HTTPException
from typing import Annotated
from database import SessionLocal, engine
from sqlalchemy.orm import Session
import models
from schemas import NotesBase
models.Base.metadata.create_all(bind=engine)
from models import Notes

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

dp_dependency = Annotated[Session, Depends(get_db)]


router = APIRouter(
    prefix="/api/notes",
    tags=["notes"],
    responses={404: {"description": "Not found"}},
)


@router.post("/notes", status_code=status.HTTP_201_CREATED)
async def create_notes(notes: NotesBase, db: Session = Depends(get_db)):
    db_notes = Notes(
        course=notes.course,
        title=notes.title,
        file=notes.file,
        cover_page=notes.cover_page,
        uploaded_by=notes.uploaded_by,
        approved_by=notes.approved_by,
        is_approved=notes.is_approved
    )
    db.add(db_notes)
    db.commit()
    db.refresh(db_notes)
    return db_notes


@router.get("/notes/by_course", status_code=status.HTTP_200_OK)
async def get_notes_by_course(course: str, db: Session = Depends(get_db)):
    notes = db.query(Notes).filter(Notes.course == course).all()
    if not notes:
        raise HTTPException(status_code=404, detail="No notes found for the given course")
    return notes


@router.delete("/notes/{notes_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_notes(notes_id: int, db: Session = Depends(get_db)):
    notes = db.query(models.Notes).filter(models.Notes.id == notes_id).first()
    if not notes:
        raise HTTPException(status_code=404, detail="Video not found")
    
    db.delete(notes)
    db.commit()
    
    return {"detail": "Notes deleted successfully"}