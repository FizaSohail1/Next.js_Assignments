"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

interface Comment {
  id: number;
  text: string;
  date: string;
}

function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");


  useEffect(() => {
    setIsMounted(true);
    const savedComments = localStorage.getItem("comments"); 
    if (savedComments) {
      setComments(JSON.parse(savedComments) as Comment[]);
    }
  }, []);


  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("comments", JSON.stringify(comments)); 
    }
  }, [comments, isMounted]);

  const addComment = (): void => {
    if (newComment.trim() !== "") {
      const currentDate = new Date().toLocaleString();
      setComments([...comments, { id: Date.now(), text: newComment ,date: currentDate}]);
      setNewComment("");
    }
  };
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewComment(e.target.value);
  };

   const deleteComment = (id: number): void => {
    setComments(comments.filter((comment) => comment.id !== id)); 
  };

  return (
    <div className="w-full p-6 my-10 bg-gray-100 rounded-lg shadow-md">
      <h1 className="font-bold text-2xl mb-6 text-gray-700">Comments</h1>
      <textarea
        placeholder="Write your comment here..."
        rows={4}
        value={newComment}
        onChange={handleCommentChange}
        className="w-full p-3 mb-4 text-gray-700 border border-gray-300 rounded-lg"
      />
      <button
        className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
        onClick={addComment}> Post Comment
      </button>
      <div className="mt-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-3 mb-2 bg-white border rounded-lg flex flex-col md:flex-row justify-between">
                <div>
                <p className="text-gray-800">{comment.text}</p>
                <p className="text-gray-500 text-sm">Posted on: {comment.date}</p>
              </div>
            <button  onClick={() => deleteComment(comment.id)} className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-md my-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
