import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Card, { CardContent } from '../ui/Card';

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface FeaturedSectionProps {
  title: string;
  description?: string;
  items: FeaturedItem[];
  viewAllLink?: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  description,
  items,
  viewAllLink,
}) => {
  const handleItemClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <section className="py-10 bg-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
            {description && (
              <p className="text-gray-600 max-w-2xl">{description}</p>
            )}
          </div>
          {viewAllLink && (
            <a
              href={viewAllLink}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4 md:mt-0 transition-colors"
            >
              Ver todos <ArrowRight size={16} className="ml-1" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card 
              key={item.id} 
              className="h-full flex flex-col cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handleItemClick(item.link)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{item.description}</p>
                <div className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  Más información <ArrowRight size={16} className="ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;