# **Props Drilling**

### **What is Props Drilling?**

Props Drilling is the process of passing data from a parent component to a deeply nested child component through multiple intermediate components, even if those intermediate components do not need the data.

---

### **Example (Problem Scenario)**

```
<App>
<Parentuser={user}>
<Childuser={user}>
<GrandChilduser={user}/>
</Child>
</Parent>
</App>
```

Here, `Parent` and `Child` are just forwarding props without using them.

---

### **Why Props Drilling is a Problem**

- Makes code **messy and harder to maintain**
- Creates **unnecessary dependencies** between components
- Reduces **reusability**
- Difficult to scale in large applications

---

### **When It’s Okay**

- Small applications
- Shallow component tree (2–3 levels)
- Limited data passing

---

# **Context API**

### **What is Context API?**

Context API is a built-in React feature that allows you to share data globally across components without manually passing props at every level.

---

### **Core Idea**

Instead of passing props step-by-step, you create a **central data store (context)** and access it directly wherever needed.

---

### **Basic Flow**

### **1. Create Context**

```
constUserContext=React.createContext();
```

### **2. Provide Context**

```
<UserContext.Providervalue={user}>
<App/>
</UserContext.Provider>
```

### **3. Consume Context**

```
constuser=useContext(UserContext);
```

---

### **Key Components**

- `createContext()` → creates context
- `Provider` → supplies data
- `useContext()` → consumes data

---

### **Advantages**

- Eliminates **props drilling**
- Makes code **cleaner and scalable**
- Easy access to **global data** (user, theme, auth, etc.)

---

### **Limitations**

- Can cause **unnecessary re-renders** if not optimized
- Not ideal for **very complex state management** (Redux/Zustand better)
  Displaying Day 51 notes.md.
