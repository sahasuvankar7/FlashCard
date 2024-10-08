"use client";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({ question, lowestId, highestId, id }) => {
  const [result, setResult] = useState(true);

  const handleChange = () => {
    setResult((prevResult) => !prevResult);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full min-w-[50vw] min-h-[50vh]">
      {result ? (
        <div
          className="text-left border-2 border-gray-950 p-10 rounded-md mb-10 shadow-md bg-white w-full "
          onClick={handleChange}
        >
          <h1 className="font-bold text-lg mb-4">{question.desc}</h1>
          <div className="space-y-2">
            {question.answers.map((ans, index) => (
              <p className="font-semibold text-base" key={index}>{`${
                index + 1
              }.${ans}`}</p>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="text-left border-2 border-gray-950 p-10 rounded-md mb-10 shadow-md bg-white w-full "
          onClick={handleChange}
        >
          <h1 className="font-bold text-lg mb-4">Result</h1>
          <p className="font-semibold text-base">{question.answer}</p>
        </div>
      )}
      <div className="mt-4 flex space-x-4">
        <Link
          href={`/cards/${question.id - 1}`}
          className={`px-4 py-2 rounded ${
            id == lowestId
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          aria-disabled={id === lowestId}
        >
          Prev
        </Link>
        <Link
          href={`/cards/${question.id + 1}`}
          className={`px-4 py-2 rounded ${
            id == highestId
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          aria-disabled={id === highestId}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Card;
