import React, { useState } from 'react';
import { Pin, PinOff, AlertTriangle, Info, MessageSquare } from 'lucide-react';
import { NewsItem } from '../types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface NewsCardProps {
  news: NewsItem[];
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(news);
  
  const togglePin = (id: string) => {
    setNewsItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, isPinned: !item.isPinned } : item
      )
    );
  };
  
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-red-500" />;
      case 'important':
        return <Info className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />;
      default:
        return <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />;
    }
  };
  
  const sortedNews = [...newsItems].sort((a, b) => {
    // Pinned items first
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    
    // Then by priority
    const priorityOrder = { critical: 0, important: 1, normal: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    
    // Then by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Berita & Pengumuman</h3>
        <button className="text-sm text-pdsb-green-500 hover:text-pdsb-green-600">
          Lihat Semua
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-3">
        {sortedNews.map((item) => (
          <div 
            key={item.id} 
            className={`news-item ${item.isPinned ? 'pinned' : ''} ${item.priority}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-2 md:space-x-3">
                {getPriorityIcon(item.priority)}
                <div>
                  <h4 className="font-medium text-sm md:text-base text-gray-900">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">{item.content}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span className="bg-gray-200 px-2 py-0.5 rounded-full">{item.category}</span>
                    <span className="mx-2">•</span>
                    <span>{format(new Date(item.date), 'dd MMM yyyy', { locale: id })}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => togglePin(item.id)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                {item.isPinned ? (
                  <PinOff className="h-4 w-4" />
                ) : (
                  <Pin className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;