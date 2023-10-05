// components/Card.tsx
interface CardProps {
  // Define your card properties here
  title: string;
  description: string;
  // Add more properties as needed
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
