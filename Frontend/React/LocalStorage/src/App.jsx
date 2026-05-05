import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");
  const [descr, setDescr] = useState("");
  const [role, setRole] = useState("Tumhara College");
  const [allUsers, setAllUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("all-users")) || [];
  });
  // const localData =

  function submitHandler(e) {
    e.preventDefault();

    const oldData = [...allUsers];
    oldData.push({ userName: userName, imgUrl: img, descr: descr, role: role });

    localStorage.setItem("all-users", JSON.stringify(oldData));
    setAllUsers(oldData);

    setUserName("");
    setImg("");
    setDescr("");
  }


  // useEffect(()=>{
  //   localStorage.setItem("all-users", JSON.stringify(allUsers));
  //   console.log(localData)
  // },[allUsers])

  return (
    <>
      <form className="w-full" onSubmit={submitHandler}>
        <input
          className=" w-1/2 rounded-md text-white border-2 border-white"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="Enter your Name"
        />

        <input
          className=" w-1/2 rounded-md text-white border-2 border-white"
          onChange={(e) => setImg(e.target.value)}
          value={img}
          type="text"
          placeholder="Enter img url"
        />

        <input
          className=" w-1/2 rounded-md text-white border-2 border-white"
          onChange={(e) => setDescr(e.target.value)}
          value={descr}
          type="text"
          placeholder="Enter description"
        />

        <select
          name="role"
          className="w-1/2 bg-slate-700"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Hacker</option>
          <option>Programmer</option>
          <option>Coder</option>
          <option>Tumhara College</option>
        </select>

        <input
          type="submit"
          className="w-full bg-emerald-400 rounded-lg"
        />

        <div className="flex gap-5">
          {allUsers.map((elem, index) => (
            <Card
              imgUrl={elem.imgUrl}
              userName={elem.userName}
              description={elem.descr}
              role={elem.role}
              key={index}
              users={allUsers}
              onRemove={() => {
                setAllUsers((prev) => {
                  const copyUsers = [...prev];
                  copyUsers.splice(index, 1);
                  localStorage.setItem("all-users",JSON.stringify(copyUsers))
                  return copyUsers;
                });
              }}
            >
              {/* {console.log(elem)} */}
            </Card>
          ))}
        </div>
      </form>
    </>
  );
}

export default App;
