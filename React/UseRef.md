
```markdown
Notes: useRef + React Hook Form

🔹 1. What is useRef?

useRef is a React hook used to store a mutable value that does NOT cause re-rendering

It is commonly used for:

Accessing DOM elements

Persisting values across renders

Performance optimization

Syntax:
const ref = useRef(initialValue);
Key Points:

The value is stored inside ref.current

Updating ref.current does NOT trigger a re-render

The same reference persists across renders

🔹 2. Controlling Input Using useRef (instead of useState)
Problem with useState
const [value, setValue] = useState("");

<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>

Every keystroke → triggers a re-render

Can affect performance in large forms

Using useRef
const inputRef = useRef();

<input ref={inputRef} />

const handleSubmit = () => {
  console.log(inputRef.current.value);
};
Benefits:

No re-render on typing

Better performance for large forms

Direct access to input value

🔹 3. Multiple Inputs Using Multiple Refs (Initial Approach)
const nameRef = useRef();
const emailRef = useRef();
const passwordRef = useRef();
<input ref={nameRef} />
<input ref={emailRef} />
<input ref={passwordRef} />
Problem:

Not scalable

Too many refs for large forms

🔹 4. Optimized Approach: Single useRef({})
const inputRefs = useRef({});
<input name="name" ref={(e) => (inputRefs.current[e.name] = e)} />
<input name="email" ref={(e) => (inputRefs.current[e.name] = e)} />
<input name="password" ref={(e) => (inputRefs.current[e.name] = e)} />
Access Values:
const handleSubmit = () => {
  const data = {
    name: inputRefs.current.name.value,
    email: inputRefs.current.email.value,
    password: inputRefs.current.password.value
  };

  console.log(data);
};
Benefits:

Scalable for large forms

Clean and dynamic

Single ref handles all inputs

🔹 5. Introduction to React Hook Form

A library to manage forms efficiently in React

Uses uncontrolled components + refs internally

Minimizes re-renders → better performance

🔹 6. Basic Usage of React Hook Form
Install:
npm install react-hook-form
Setup:
import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm();
Example:
<form onSubmit={handleSubmit((data) => console.log(data))}>
  
  <input {...register("name")} />
  
  <input {...register("email")} />
  
  <input {...register("password")} />

  <button type="submit">Submit</button>
</form>
🔹 7. What does register() do?

Connects input fields to React Hook Form

Tracks their values

Handles validation

Behind the scenes:

Uses refs internally

Avoids unnecessary re-renders

Makes form handling optimized
```
Displaying Day 44 notes.md.