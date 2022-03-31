import { useState } from "react";
import Nav from "../component/Nav";
import styles from "../styles/Home.module.css";


export default function AddPost() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!title || !content) return setError("All fields are required");

    let post = {
      firstname,
      lastname,
      email,
      phone,
      address,
      published: false,
      createdAt: new Date().toISOString(),
    };
    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });

    let data = await response.json();

    if (data.success) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setAddress("");
      return setMessage(data.message);
    } else {
      return setError(data.message);
    }
  };

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <form onSubmit={handlePost} className={styles.form}>
          {error ? (
            <div className={styles.formItem}>
              <h3 className={styles.error}>{error}</h3>
            </div>
          ) : null}
          {message ? (
            <div className={styles.formItem}>
              <h3 className={styles.message}>{message}</h3>
            </div>
          ) : null}
          <div className={styles.formItem}>
            <label>Firstname</label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              placeholder="firstname"
            />
          </div>
          <div className={styles.formItem}>
            <label>Lastname</label>
            <textarea
              name="lastname"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              placeholder="lastname"
            />
          </div>
          <div className={styles.formItem}>
            <label>Email</label>
            <textarea
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
            />
          </div>
          <div className={styles.formItem}>
            <label>Phone</label>
            <textarea
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="phone"
            />
          </div>
          <div className={styles.formItem}>
            <label>Address</label>
            <textarea
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="address"
            />
          </div>
          <div className={styles.formItem}>
            <button type="submit">Add post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

