import { useParams } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

export default function MentorDetails() {
  const { username } = useParams();

  const { mentorList } = useAdmin();

  const mentor = mentorList.find((mentor) => mentor.username == username);

  console.log(mentor);

  return <h1>{mentor.bio}</h1>;
}
