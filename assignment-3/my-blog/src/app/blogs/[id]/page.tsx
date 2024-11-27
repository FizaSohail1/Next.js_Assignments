import Footer from "@/app/components/Footer/page";
import Navbar from "@/app/components/Navbar/page";
import Comments from "@/app/components/comments/page";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  ingredients?: string[];
  steps?: any;
  suggestions?: string;
  subheadings?: string[];
  contents?: string[];
  images?: [];
}

async function BlogPost( params : { id: string } ) {
  const id =  params.id;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/_data/blogData.json`);
  const blogs = await res.json();
  // Finding the blog by ID
  let blog: Blog;
  for (const category in blogs) {
    blog = blogs[category].find((post: Blog) => post.id === id);
    if (blog) break;
  }

  if (!blog) {
    return <h1>404 - Blog Post Not Found</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="md:mx-16 lg:mx-28 mx-5 mt-5">
        {parseInt(blog.id) >= 1 && parseInt(blog.id) < 10 && (
          <div>
            <Image
              src={blog.image}
              alt={blog.title}
              className=" h-[300px] w-[900px] md:h-[400px] lg:h-[500px]  shadow-md mb-6 object-cover mx-auto"/>

            <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center  my-4 lg:mt-2"> {blog.title}</h1>
            <p className="text-md text-gray-600 lg:w-[90%] mx-auto leading-relaxed"> {blog.description} </p>
            <hr />

            <div className="mb-6">
              <div className="">
                <h3 className="font-bold text-3xl mt-10 text-gray-800">Ingredients of {blog.title}</h3>
                <p className="my-8">
                  {blog.ingredients?.map((ingredient, index) => (
                    <li key={index} className=" text-gray-800 text-md">
                      {ingredient}
                    </li>
                  ))}
                </p>
              </div>
              <hr className="text-black" />
            </div>

            <div className="flex flex-col lg:flex-row  ">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  Step-by-Step Instructions:
                </h2>
                <ol className="list-decimal list-inside space-y-4">
                  {blog.steps?.map((item, index) => {
                    if (item.type === "heading") {
                      return (
                        <li key={index} className="text-xl font-bold text-gray-700 mt-6 list-decimal list-inside"> 
                          {item.content}
                        </li>
                      );
                    } else if (item.type === "step") {
                      return (
                        <p key={index} className="  text-md text-gray-600 w-[90%]">
                          {item.content}
                        </p>
                      );
                    }
                  })}
                </ol>
              </div>

              <div className="bg-black h-auto w-auto shadow-lg rounded-lg overflow-hidden px-4 lg:mt-[75px] mb-5">
                <Image
                  src="/newsletter.jpg"
                  alt="Delicious Food"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-2 text-white">
                  <h2 className="text-2xl font-bold mb-4 text-center "> Delicious Recipes & More! </h2>
                  <p className="text-gray-300  text-sm mb-3"> Stay updated with the latest food trends, tips, and recipes.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 h-[340px] shadow-lg px-4   mx-auto">
                  <h2 className="text-2xl font-bold text-white mb-4 mt-2 text-center"> Subscribe to Our Newsletter</h2>
                  <p className="text-gray-200 mb-6 text-center">
                    Get the latest updates, recipes, and food news delivered to
                    your inbox.
                  </p>
                  <form className="flex flex-col gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-md text-gray-900 outline-none border-none focus:ring-2 focus:ring-white"
                    />
                    <button type="submit" className="bg-white text-blue-600 font-bold py-2 rounded-md hover:bg-gray-100 transition">
                      Subscribe Now
                    </button>
                  </form>
                  <p className="text-gray-400 text-sm mt-4 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        )}

        {parseInt(blog.id) >= 10 && (
          <div>
            <Image
              src={blog.image}
              alt={blog.title}
              className=" h-[300px] w-[900px] md:h-[400px] lg:h-[500px] lg:w-[1000px] shadow-md mb-6 lg:mb-10 object-cover mx-auto"
            />

            <h1 className="text-3xl font-bold mb-4 text-gray-800 lg:ml-[5%]  my-4 lg:mt-[3%] ">
              {blog.title}
            </h1>
            <p className="text-lg text-gray-600 lg:w-[90%] mx-auto leading-relaxed">
              {blog.description}
            </p>
            {blog.subheadings?.map((subheading, index) => (
              <div key={index} className="my-6">
                {parseInt(blog.id) >= 10 && parseInt(blog.id) < 12 && (
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-800 lg:ml-[5%] my-4 lg:mt-2">
                      {subheading}
                    </h3>
                    <p className="m3-8 text-gray-600 text-lg lg:w-[90%] mx-auto ">
                      {blog.contents?.[index]}
                    </p>
                  </div>
                )}
                {parseInt(blog.id) === 12 && (
                  <div key={index} className="my-6">
                    <div className="block lg:flex gap-6 lg:ml-[3%]">
                      <div className="lg:w-1/2">
                        <Image
                          src={`blog.images?.[index]`}
                          alt="img"
                          className="w-full h-auto lg:w-[500px] lg:h-[300px] rounded-lg shadow-lg object-cover"
                        />
                      </div>
                      <div className="lg:w-[40%]">
                        <h3 className="text-3xl font-bold mb-4 mt-5 lg:mt-0 text-gray-800">
                          {subheading}
                        </h3>
                        <p className="mb-4 text-gray-600 text-lg">
                          {blog.contents?.[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <Comments />
      </div>
      <Footer />
    </>
  );
}


export default BlogPost;
