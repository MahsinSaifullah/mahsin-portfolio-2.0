import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Computer, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProjectItemProps {
  name: string;
  image: string | StaticImageData;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  image,
  description,
  techStack,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <Image
          src={image}
          alt={name}
          className="border border-lime shadow-lime shadow-md opacity-80"
        />
      </div>
      <div className="flex flex-col items-end">
        <h3 className="text-lime text-xs">Featured Project</h3>
        <h2 className="text-slate-300 text-xl mt-2 font-bold">{name}</h2>
        <p className="mt-4 bg-lightNavy text-slate-300 p-4 text-end rounded-sm text-sm shadow-lg">
          {description}
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 pt-4">
          {techStack.map((tech) => (
            <Badge
              variant="outline"
              className="p-2 border-lime text-lime flex justify-center items-center rounded-full min-w-max"
              key={tech}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-4 mt-10 items-center justify-center">
          <Button
            asChild
            className="max-w-fit border hover:bg-lightNavy hover:text-lime hover:border-lime bg-slate-300 text-lighestNavy px-8 py-5"
          >
            <Link target="_blank" href={githubLink}>
              <Github className="h-8 w-8" /> Github
            </Link>
          </Button>
          <Button
            className="max-w-fit border border-lime bg-navy text-lime px-8 py-5"
            variant="outline"
            asChild
          >
            <Link target="_blank" href={demoLink}>
              <Computer className="h-8 w-8" /> View Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
