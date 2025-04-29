interface Props {
  params: {
    topic: string;
    category: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const { category, topic } = params;

  return (
    <div>
      <h1 className="text-6xl font-extralight">
        Page: {topic} / {category}
      </h1>
      <p>
        This is the {category} category page with topic {topic}
      </p>
    </div>
  );
}
