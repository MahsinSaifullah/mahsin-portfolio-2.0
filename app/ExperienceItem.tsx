import { Badge } from '@/components/ui/badge';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  details: string[];
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  details,
  skills,
}) => {
  return (
    <article className="flex flex-col space-y-2">
      <h3 className="text-slate-300 text-lg">
        {title} <span className="text-lime">@{company}</span>
      </h3>
      <h2 className="text-slate-500 text-sm">{duration}</h2>
      <ul className="flex flex-col space-y-4  max-w-2xl text-slate-400 pt-4">
        {details.map((detail, index) => (
          <li key={index} className="flex space-x-5">
            {detail}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-6 gap-4 pt-4">
        {skills.map((skill) => (
          <Badge
            variant="outline"
            className="p-2 border-lime text-lime flex justify-center items-center rounded-full"
            key={skill}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
};

export default ExperienceItem;
