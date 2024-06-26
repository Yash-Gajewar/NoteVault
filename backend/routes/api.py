from fastapi import APIRouter
from endpoints import user_endp, reference_books_endp, question_paper_endp, notes_endp, videos_endp


router = APIRouter()

router.include_router(user_endp.router)
router.include_router(reference_books_endp.router)
router.include_router(question_paper_endp.router)
router.include_router(notes_endp.router)
router.include_router(videos_endp.router)





