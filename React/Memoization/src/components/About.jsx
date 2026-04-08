import React from "react";

// ye bhi ek tarika hai memoization ka
// const About = React.memo(() => {
//   console.log("about rendering...");

//   return <div>About</div>;
// }()=>{});

const About = ({ count, user }) => {
  console.log("about rendering...");

  return <div>About-{count}</div>;
};

// ye bhi ek tarika hai memoization ka
// export default React.memo(About, (prevProp, nextProp) => {
//   //   console.log(prevProp, nextProp);
//   return prevProp.id === nextProp.id; // yaha pe ek aisi condition lik do jisse tume About component ko re-render nahi krna padhe
// });

export default React.memo(About); // ye itna baat kehta hai ki iss ke andar jo bhi props pass kiye hai mujhe matlab About ko agar mujhe unn mey jra sa bhi change dikha toh mey About ko rerender kr duga. Ab hota kya hai jab hum prop mey function pass krte hai toh function hota hai reference type ka toh jab bhi parent component jo ki hai App rerender hoga toh greet(func) bhi apna memory address change kr lega memory address change toh About mey bhi naya wala memory address jana chahiye jo pass kiya hoga through greet prop. toh React.memo detech krlega ki change hua hai toh re-render kr do toh iss problem se bach ne ke liye hum use krte hai useCallback() hook

// useCallback() hook ye kya krta hai greet func ka reference hold krke rakta hai. jo baar baar memory address change ho raha tha na toh usse bach ne ke liye ye use hota hai


