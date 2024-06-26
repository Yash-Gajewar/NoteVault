from fastapi import Depends, status, APIRouter, HTTPException
from typing import Annotated
from database import SessionLocal, engine
from sqlalchemy.orm import Session
import models
from schemas import VideoBase
models.Base.metadata.create_all(bind=engine)
from models import Video

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

dp_dependency = Annotated[Session, Depends(get_db)]


router = APIRouter(
    prefix="/api/videos",
    tags=["videos"],
    responses={404: {"description": "Not found"}},
)


@router.post("/videos", status_code=status.HTTP_201_CREATED)
async def create_video(video: VideoBase, db: Session = Depends(get_db)):
    db_video = Video(
        course=video.course,
        title=video.title,
        link=video.link,
        uploaded_by=video.uploaded_by,
        approved_by=video.approved_by,
        is_approved=video.is_approved
    )
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    return db_video


@router.get("/videos/by_course", status_code=status.HTTP_200_OK)
async def get_videos_by_course(course: str, db: Session = Depends(get_db)):
    videos = db.query(models.Video).filter(models.Video.course == course).all()
    if not videos:
        raise HTTPException(status_code=404, detail="No videos found for the given title")
    return videos


@router.delete("/videos/{video_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_video(video_id: int, db: Session = Depends(get_db)):
    video = db.query(models.Video).filter(models.Video.id == video_id).first()
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")
    
    db.delete(video)
    db.commit()
    
    return {"detail": "Video deleted successfully"}
