const CourseIdPage = ({
  params: { courseId },
}: {
  params: { courseId: string };
}) => {
  return <div className="">Course Id:{courseId}</div>;
};

export default CourseIdPage;
