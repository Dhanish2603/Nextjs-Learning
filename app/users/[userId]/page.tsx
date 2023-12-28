import getUser from "@/app/lib/getUser";
import getUserPost from "@/app/lib/getuserpost";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPost(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPosts posts={userPosts} />
      </Suspense>
    </>
  );
}
