import Card from "@/components/Card";
import Button from "@/components/Button";

const landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Card />

      {/* Required button shape variations */}
      <div className="mt-4 flex gap-2">
        <Button title="Small Button" styles="text-sm px-2 py-1 rounded-sm bg-blue-500 text-white" />
        <Button title="Medium Button" styles="text-md px-4 py-2 rounded-md bg-green-500 text-white" />
        <Button title="Large Button" styles="text-lg px-6 py-3 rounded-full bg-red-500 text-white" />
      </div>
    </div>
  );
};

export default landing;