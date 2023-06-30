// pages/contacts.js
import Link from "next/link";
import Layout from "../components/layout";
import { getUsers } from '../lib/users'
import styles from '../styles/Home.module.css';

export async function getStaticProps() { 
    const users = await getUsers()
   // const localData = await getLocalData()

    console.log(users);
    return {
      props: {
        users
      },
    };
 }
export default function Contacts({ users }) {
  return <Layout>
    <section>
     <h2>Users</h2>
       <ul>
         {users && users.map(({ id, name, website }) => (
          <li key={id}>
            {id} - {name}
             <br />
             {website}
         </li>
        ))}
       </ul>
    </section>
    <h2>
      <Link href="/">← Back to home</Link>
    </h2>
  </Layout>
}