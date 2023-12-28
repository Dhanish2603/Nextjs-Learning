import getallUsers from "@/app/lib/getallUsers"; 
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};
export default async function Home() {
  const usersData: Promise<User[]> = getallUsers();

  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
