interface Props {
  params: {
    topic: string;
  };
}

export default function TopicPage({ params }: Props) {
  const { topic } = params;

  return (
    <div>
      <h1 className="text-6xl font-extralight">Topic: {topic}</h1>
      <p>This is the {topic} topic page</p>
    </div>
  );
}
