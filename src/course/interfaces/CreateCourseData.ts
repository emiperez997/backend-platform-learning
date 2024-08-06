import { CourseStatus } from "@prisma/client";

export interface CreateCourseData {
  title?: string;
  description?: string;
  beginDate?: Date;
  endDate?: Date;
  status?: CourseStatus;
  teacher?: {
    connect: {
      id: number;
    };
  };
}
