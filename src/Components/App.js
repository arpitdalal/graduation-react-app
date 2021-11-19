import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToTotalClasses,
  removeFromTotalClasses,
  addToGraduationList,
  removeFromGraduationList,
} from "../slices/graduation";

function App() {
  const {
    studentNames,
    subjects,
    ArpitTotalClasses,
    VatsalTotalClasses,
    graduationList,
  } = useSelector((state) => state.graduation);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ArpitTotalClasses >= 5) {
      if (graduationList.includes("Arpit")) return;
      dispatch(addToGraduationList({ studentName: "Arpit" }));
    } else if (VatsalTotalClasses >= 5) {
      if (graduationList.includes("Vatsal")) return;
      dispatch(addToGraduationList({ studentName: "Vatsal" }));
    } else if (ArpitTotalClasses < 5) {
      dispatch(removeFromGraduationList({ studentName: "Arpit" }));
    } else if (VatsalTotalClasses < 5) {
      dispatch(removeFromGraduationList({ studentName: "Vatsal" }));
    }
  }, [ArpitTotalClasses, VatsalTotalClasses, dispatch, graduationList]);

  return (
    <>
      <div>
        <h1>Graduation Ceremony</h1>
      </div>
      <p>Vatsal:{VatsalTotalClasses}</p>
      <p>Arpit{ArpitTotalClasses}</p>
      {studentNames.map((studentName) => (
        <div key={studentName}>
          {studentName}
          {subjects.map((subject) => (
            <div key={`${studentName}-${subject}`}>
              {subject}
              <button
                onClick={() => dispatch(addToTotalClasses({ studentName }))}
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch(removeFromTotalClasses({ studentName }))
                }
              >
                -
              </button>
            </div>
          ))}
        </div>
      ))}
      {graduationList.map((graduatedStudent) => {
        return <p key={`graduated-${graduatedStudent}`}>{graduatedStudent}</p>;
      })}
    </>
  );
}

export default App;
