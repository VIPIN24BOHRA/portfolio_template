interface CirleWrapperProps {
  x: number;
  y: number;
}

function Circle() {
  return (
    <span className="inline-block w-[5px] h-[5px] rounded-[100%] bg-[#ff0000] ml-[20px] mt-[20px]"></span>
  );
}

export default function CirleWrapper({ x, y }: CirleWrapperProps) {
  const row: JSX.Element[] = [];
  for (let i = 0; i < x; i++) row.push(<Circle key={`circle-row${i}`} />);
  const CircleRow = ({ row }: { row: JSX.Element[] }) => <div>{row}</div>;
  const col = [];
  for (let i = 0; i < y; i++)
    col.push(<CircleRow row={row} key={`cirlce-col-${i}`} />);
  return <div>{col}</div>;
}
