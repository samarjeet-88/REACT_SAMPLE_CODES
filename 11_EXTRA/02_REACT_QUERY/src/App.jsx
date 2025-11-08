import { useQuery, useMutation,useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
// useQuery is used for  getting the data and useMutation is used for creating something with that data. FOR EXAMPLE YOU HAVE A LIST OF POST YOU WANT TO FETCH THAN YOU USE useQuery BUT ON THE SAME PAGE YOU A BUTTON THAT LETS YOU ADD A NEW POST THAN YU USE useMutation. BASICALLY useQuery FOR READING/FETCHING DATA AND useMutation FOR WRITING/UPDATING DATA
function App() {
    const queryClient = useQueryClient();
  const posts = [
    { id: 1, data: "HELLO HELLO HELLO" },
    { id: 2, data: "BYE BYE BYE" },
  ];

  const fetchfn = () => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        if (success) resolve(posts);
        else reject();
      }, 2000);
    });
  };

  const createPost = async (newPost) => {
   posts.push(newPost);
    return newPost
  };

  const postQuery = useQuery({
    // AN ARRAY THAT IDENIFIES THE DATA IN CACHE. BASICALY IF YOU CALL THE SAME QUERKEY AGAIN THAN IT WILL RETURN THE CACHED DATA INSTANTLY

    // ALSO YOU CAN INCLUDE STATE IN THE ARRAY IF YOU WANT THE USE QUERY TO PERFROM THE RE-FETCH AGAIN IF SOME DATA CHANGES
    queryKey: ["posts"],
    //QUERYFN ALWAYS RETURNS A PROMISE. BASICALLY ANY ASYNC FUNCTION
    queryFn: fetchfn,
  });

  const postMutate = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleSubmit = () => {
    postMutate.mutate({ id: 3, data: "My New Post" });
  };

  if (postQuery.isLoading) return <h1 className="text-red-500">Loading...</h1>;
  if (postQuery.isError)
    return <h1 className="text-red-500">{JSON.stringify(postQuery.error)}.</h1>;

  console.log(posts);
  return (
    <>
      <div className="w-screen min-h-screen bg-black flex flex-col items-center">
        <h1 className="text-red-500 text-center text-2xl pt-6 font-bold">
          TANSTACK QUERY
        </h1>
        <div className="text-red-500 pt-8 font-bold">
          {postQuery.data.map((post) => (
            <div key={post.id}>
              <h1>{post.data}</h1>
            </div>
          ))}
        </div>
        <button
          className="bg-green-500 p-2 mt-5 hover:cursor-pointer"
          onClick={handleSubmit}
        >
          TO ADD NEW POST:
        </button>
      </div>
    </>
  );
}

export default App;

