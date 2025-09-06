"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Type for animation step
type Step = {
  array: number[]; // Current array state
  comparing: [number, number] | null; // Indexes currently being compared
  sortedIndex: number; // Index from which elements are sorted (green)
};

export default function BubbleSortDemo() {
  // Initial array
  const initialArray = [5, 3, 8, 4, 2];

  // Step state to drive animation
  const [step, setStep] = useState<Step>({
    array: initialArray,
    comparing: null,
    sortedIndex: initialArray.length,
  });

  // Step counter for display
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    // Async function to animate Bubble Sort
    const sort = async () => {
      let arr = [...initialArray]; // Copy of the array
      let n = arr.length;

      // Outer loop: passes
      for (let i = 0; i < n; i++) {
        // Inner loop: comparisons
        for (let j = 0; j < n - i - 1; j++) {
          // Highlight bars being compared
          setStep({
            array: [...arr],
            comparing: [j, j + 1],
            sortedIndex: n - i,
          });

          // Increment step counter
          setStepCount((prev) => prev + 1);

          // Pause so viewers can see comparison
          await new Promise((res) => setTimeout(res, 800));

          // Swap if left > right
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            // Update step state after swap
            setStep({
              array: [...arr],
              comparing: [j, j + 1],
              sortedIndex: n - i,
            });

            // Pause so swap is visible
            await new Promise((res) => setTimeout(res, 800));
          }
        }
      }

      // Final state: all sorted
      setStep({
        array: arr,
        comparing: null,
        sortedIndex: 0,
      });
    };

    sort(); // Run the animation
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 min-h-screen justify-center">
      {/* Step counter display */}
      <p className="text-lg font-semibold">Step: {stepCount}</p>

      {/* Comparison indicators (arrows) */}
      {step.comparing && (
        <div className="flex justify-center gap-2">
          {step.array.map((_, idx) => {
            if (idx === step.comparing?.[0]) {
              return (
                <span key={idx} className="w-12 text-center text-xl">
                  ←
                </span>
              );
            }
            if (idx === step.comparing?.[1]) {
              return (
                <span key={idx} className="w-12 text-center text-xl">
                  →
                </span>
              );
            }
            return <span key={idx} className="w-12"></span>;
          })}
        </div>
      )}

      {/* Animated bars */}
      <div className="flex justify-center items-end gap-2 h-64">
        {step.array.map((num, idx) => {
          let color = "bg-blue-500"; // Default bar color

          if (step.comparing && step.comparing.includes(idx)) {
            color = "bg-yellow-400"; // Currently comparing
          } else if (idx >= step.sortedIndex) {
            color = "bg-green-500"; // Already sorted
          }

          return (
            <motion.div
              key={idx}
              layout // Animate position changes automatically
              className={`w-12 rounded-md flex items-end justify-center text-white font-bold ${color}`}
              style={{ height: `${num * 30}px` }}
              transition={{ duration: 0.6 }}
            >
              {num}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
