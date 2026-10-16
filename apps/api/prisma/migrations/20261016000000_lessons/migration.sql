-- Lessons, exam tags and lesson progress
ALTER TABLE "Topic" ADD COLUMN "level" TEXT NOT NULL DEFAULT 'FOUNDATIONAL';
ALTER TABLE "Topic" ADD COLUMN "exams" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Topic" ADD COLUMN "lesson" JSONB;

ALTER TABLE "Question" ADD COLUMN "exams" TEXT[] DEFAULT ARRAY[]::TEXT[];

CREATE TABLE "LessonProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LessonProgress_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "LessonProgress_userId_topicId_key" ON "LessonProgress"("userId", "topicId");
CREATE INDEX "LessonProgress_userId_idx" ON "LessonProgress"("userId");

ALTER TABLE "LessonProgress" ADD CONSTRAINT "LessonProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "LessonProgress" ADD CONSTRAINT "LessonProgress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
