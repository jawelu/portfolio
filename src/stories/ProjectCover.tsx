// components/project.tsx

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  tag?: string;
  description: string;
};

export default function ProjectCard({ imageSrc, title, tag, description }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer rounded-lg p-6 flex items-center space-x-6">
      <img
        src={imageSrc}
        alt={title}
        className="w-20 h-20 object-contain"
      />
      <div>
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-bold">{title}</h2>
          {tag && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
