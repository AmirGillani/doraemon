import React, { useRef, useState, useEffect } from "react";
import Nobita from "../assets/Nobita.png";
import Gian from "../assets/gian.png";
import { motion } from "framer-motion";


export default function Friends() {
  const targetDivRef = useRef(null);

  // Initialize the board state
  const [board, setBoard] = useState(Array(9).fill(null)); // 9 squares, initially all null
  const [isXNext, setIsXNext] = useState(true); // True if X's turn, False if O's turn
  const [winner, setWinner] = useState(null);

  // Handle a square click (player move)
  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore if square is already filled or the game is over
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O"; // Set the current player's symbol
    setBoard(newBoard);
    setIsXNext(!isXNext); // Switch player
    checkWinner(newBoard); // Check if there's a winner
  };

  // Check if there's a winner
  const checkWinner = (newBoard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]); // Set the winner ('X' or 'O')
        return;
      }
    }
    // Check for a draw (if no empty spaces left)
    if (!newBoard.includes(null)) {
      setWinner("Draw");
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  // Scroll to the winner div when the winner state changes
  useEffect(() => {
    if (winner) {
      targetDivRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [winner]); // Only run when the winner state changes

  return (
    <div>
      <h1 className="font-semibold text-[#04A6D8] font-doraemon text-4xl my-16 text-center dark:text-white">
        Play Game X and O
      </h1>
      <div>
        <motion.div
          className="container mx-auto md:grid grid-cols-[1fr_4fr_1fr] flex flex-col"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Image - Nobita */}
          <div className="bg-[#04A6D8] rounded-tl-2xl rounded-bl-2xl dark:bg-black md:flex justify-center items-center hidden">
            <img src={Nobita} alt="Nobita" className="w-40" />
          </div>

          {/* Tic-Tac-Toe Grid */}
          <div className="grid grid-cols-3 md:text-9xl text-5xl text-gray-200 text-center">
            {board.map((value, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`h-20 border-2 border-white md:h-32 bg-gradient-to-b from-[#CD933A] to-[#B3B3B1] dark:bg-gradient-to-b from-[#CD933A] to-[#B3B3B1]`}
              >
                {value}
              </div>
            ))}
          </div>

          {/* Right Image - Gian */}
          <div className="bg-[#04A6D8] rounded-tr-2xl rounded-br-2xl dark:bg-black md:flex justify-center items-center hidden">
            <img src={Gian} alt="Gian" className="w-40" />
          </div>
        </motion.div>

        {/* Game Status */}
        <div className="flex flex-col justify-center items-center">
          {winner ? (
            <div className="flex flex-col justify-center items-center">
              {winner === "Draw" ? (
                "It's a Draw!"
              ) : winner === "X" ? (
                <div
                  className="flex justify-center items-center gap-1 md:h-screen h-96"
                  ref={targetDivRef}
                >
                  <img src={Nobita} className="w-40" />
                  <h2 className="md:text-7xl text-5xl dark:text-white">
                    Nobita Won !!
                  </h2>
                  <button
                    onClick={resetGame}
                    className="text-xl font-semibold text-white dark:bg-black dark:hover:bg-gray-950  bg-red-500 rounded-full hover:bg-red-700 hover:cursor-pointer p-4 m-4"
                  >
                    Play Again
                  </button>
                </div>
              ) : (
                <div
                  className="flex justify-center items-center gap-1 md:h-screen h-96"
                  ref={targetDivRef}
                >
                  <img src={Gian} className="w-40" />
                  <h2 className="md:text-7xl text-5xl dark:text-white">
                    Gian Won !!
                  </h2>
                  <button
                    onClick={resetGame}
                    className="text-xl font-semibold text-white dark:bg-black dark:hover:bg-gray-950 bg-red-500 rounded-full hover:bg-red-700 hover:cursor-pointer p-4 m-4"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-xl font-semibold text-white text-center dark:bg-black dark:hover:bg-gray-950 bg-red-500 rounded-full hover:bg-red-700 hover:cursor-pointer inline-block p-4 m-4">
              {isXNext ? "Nobita's Turn" : "Gian's Turn"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
