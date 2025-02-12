export interface MultiData {
  value: number;
  multiplier: number;
}

export const processData = (dataObject: MultiData[]) => {
  const newData: MultiData[] = [];
  dataObject.forEach((d) =>
    newData.push({ value: d.value * d.multiplier, multiplier: d.multiplier })
  );
  return newData
};

