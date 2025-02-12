import { useState } from "react";

interface MultiData {
  value: number;
  multiplier: number;
}

const TaskTwo = () => {
  const [data, setData] = useState([
    { value: 2, multiplier: 2 },
    { value: 3, multiplier: 3 },
  ]);

  const processData = () => {
    const newData: MultiData[] = [];
    data.forEach((e) =>
      newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier })
    );
    setData(newData);
  };
  return (
    <div className="flex flex-col items-center">
      <pre>{JSON.stringify(data)}</pre>
      <button
        className="bg-blue-500 rounded-lg px-6 py-2 font-semibold mt-3"
        type="button"
        onClick={() => processData()}
      >
        Run
      </button>
    </div>
  );
};

export default TaskTwo;
