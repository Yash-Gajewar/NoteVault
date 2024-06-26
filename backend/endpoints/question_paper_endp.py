from fastapi import Depends, status, APIRouter, HTTPException
from typing import Annotated
from database import SessionLocal, engine
from sqlalchemy.orm import Session
import models
from schemas import QuestionPaperBase
models.Base.metadata.create_all(bind=engine)
from models import QuestionPaper

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

dp_dependency = Annotated[Session, Depends(get_db)]


router = APIRouter(
    prefix="/api/question_papers",
    tags=["question_papers"],
    responses={404: {"description": "Not found"}},
)


@router.post("/question_papers", status_code=status.HTTP_201_CREATED)
async def create_question_paper(question_paper: QuestionPaperBase, db: Session = Depends(get_db)):
    db_question_paper = models.QuestionPaper(
        course=question_paper.course,
        title=question_paper.title,
        file=question_paper.file,
        cover_page=question_paper.cover_page,
        uploaded_by=question_paper.uploaded_by,
        approved_by=question_paper.approved_by,
        year=question_paper.year,
        type=question_paper.type,
        is_approved=question_paper.is_approved,
        isSpit=question_paper.isSpit
    )
    db.add(db_question_paper)
    db.commit()
    db.refresh(db_question_paper)
    return db_question_paper


@router.get("/question_papers/by_course", status_code=status.HTTP_200_OK)
async def get_question_papers_by_course(course: str, db: Session = Depends(get_db)):
    question_papers = db.query(QuestionPaper).filter(QuestionPaper.course == course).all()
    if not question_papers:
        raise HTTPException(status_code=404, detail="No question papers found for the given course")
    return question_papers


@router.get("/question_papers/by_year", status_code=status.HTTP_200_OK)
async def get_question_papers_by_year(year: str, db: Session = Depends(get_db)):
    question_papers = db.query(QuestionPaper).filter(QuestionPaper.year == year).all()
    if not question_papers:
        raise HTTPException(status_code=404, detail="No question papers found for the given year")
    return question_papers


@router.delete("/question_papers/{question_paper_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_question_paper(question_paper_id: int, db: Session = Depends(get_db)):
    question_paper = db.query(models.QuestionPaper).filter(models.QuestionPaper.id == question_paper_id).first()
    if not question_paper:
        raise HTTPException(status_code=404, detail="Question paper not found")
    
    db.delete(question_paper)
    db.commit()
    
    return {"detail": "Question paper deleted successfully"}

