import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  slug, 
  tags = [] 
}) => {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="h-full cursor-pointer">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted mb-4">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-background text-muted border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};