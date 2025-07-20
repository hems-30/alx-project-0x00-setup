import Card from "@/components/Card";
import Button from "@/components/Button";

const landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="mb-6 space-x-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded" styles="text-lg rounded-full" />
      </div>

      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default landing;
