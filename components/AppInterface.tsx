import React from 'react';
import { 
  Search, Bell, LayoutGrid, CheckSquare, Settings, 
  MessageSquare, Users, Folder, Plus, Filter, 
  MoreHorizontal, ChevronDown, Circle 
} from 'lucide-react';

interface AppInterfaceProps {
  activeFeature: string;
}

const Avatar: React.FC<{ src?: string; fallback: string }> = ({ src, fallback }) => (
  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px] overflow-hidden border border-white/10">
    {src ? <img src={src} alt="avatar" className="w-full h-full object-cover" /> : fallback}
  </div>
);

const Tag: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <span className={`text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1 font-medium ${color}`}>
    {label}
  </span>
);

const AppInterface: React.FC<AppInterfaceProps> = ({ activeFeature }) => {
  return (
    <div className="flex h-[600px] md:h-[700px] w-full text-gray-300 font-sans text-xs sm:text-sm select-none">
      
      {/* SIDEBAR */}
      <div className="w-14 md:w-60 bg-[#0d1117] border-r border-white/5 flex flex-col flex-shrink-0">
        <div className="h-12 border-b border-white/5 flex items-center px-4 md:px-4 justify-center md:justify-start">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded md:mr-2"></div>
          <span className="hidden md:block font-semibold text-white">Acme Corp</span>
          <ChevronDown size={14} className="ml-auto hidden md:block text-gray-500" />
        </div>

        <div className="p-2 md:p-3 space-y-1 overflow-y-auto custom-scrollbar flex-1">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 px-2 py-1.5 bg-white/5 rounded text-gray-400 mb-4 cursor-pointer hover:bg-white/10 transition">
            <Search size={14} />
            <span>Search...</span>
            <span className="ml-auto text-[10px] bg-white/10 px-1 rounded">⌘K</span>
          </div>

          <div className="md:px-2 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wider hidden md:block">
            Your Projects
          </div>

          {/* Nav Items */}
          {[
            { icon: LayoutGrid, label: 'Tracker', active: true },
            { icon: CheckSquare, label: 'My Issues' },
            { icon: Folder, label: 'All Issues' },
            { icon: LayoutGrid, label: 'All Projects' },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center justify-center md:justify-start gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors ${item.active ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-white/5 text-gray-400 hover:text-gray-200'}`}
            >
              <item.icon size={16} />
              <span className="hidden md:block">{item.label}</span>
            </div>
          ))}

          <div className="my-4 h-[1px] bg-white/5 mx-2" />

          <div className="md:px-2 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wider hidden md:block">
            CRM
          </div>
          {[
            { icon: Users, label: 'Contacts' },
            { icon: MessageSquare, label: 'Inbox' },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center justify-center md:justify-start gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-white/5 text-gray-400 hover:text-gray-200 transition-colors`}
            >
              <item.icon size={16} />
              <span className="hidden md:block">{item.label}</span>
              {item.label === 'Inbox' && <span className="hidden md:flex ml-auto bg-blue-600 text-white text-[10px] px-1.5 rounded-full">3</span>}
            </div>
          ))}
        </div>

        {/* Bottom Sidebar */}
        <div className="p-3 border-t border-white/5 flex flex-col gap-2">
          <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <span className="hidden md:block text-xs">Online</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col bg-[#020408] overflow-hidden">
        
        {/* Top Header */}
        <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#0d1117]/50">
          <div className="flex items-center gap-3">
             <span className="text-gray-500">Your projects</span>
             <span className="text-gray-600">/</span>
             <span className="text-gray-500">CRM</span>
             <span className="text-gray-600">/</span>
             <span className="text-white font-medium">{activeFeature}</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2">
                <Avatar fallback="JD" />
                <Avatar fallback="AS" />
                <Avatar fallback="+5" />
             </div>
             <div className="h-4 w-[1px] bg-white/10"></div>
             <Bell size={16} className="text-gray-400 cursor-pointer hover:text-white" />
             <Settings size={16} className="text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Toolbar */}
        <div className="h-12 border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="flex bg-white/5 rounded p-0.5">
              <button className="px-3 py-1 bg-white/10 rounded text-white text-xs font-medium shadow-sm">Kanban</button>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-300 text-xs font-medium transition">List</button>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-300 text-xs font-medium transition">Timeline</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-white/5 transition text-gray-400">
              <Filter size={14} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 transition rounded text-white font-medium">
              <Plus size={14} />
              <span>New Issue</span>
            </button>
          </div>
        </div>

        {/* KANBAN BOARD AREA */}
        <div className="flex-1 p-4 md:p-6 overflow-x-auto custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[length:20px_20px] bg-fixed">
          <div className="flex gap-4 md:gap-6 min-w-[800px] h-full">
            
            {/* Column 1: Backlog */}
            <div className="w-72 flex flex-col flex-shrink-0">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  Backlog <span className="text-gray-600">10</span>
                </div>
                <Plus size={14} className="cursor-pointer hover:text-white" />
              </div>
              
              <div className="space-y-3">
                <IssueCard 
                   id="CRM-128" 
                   title="Set up cluster monitoring" 
                   tags={[{label: 'Low', color: 'bg-green-500/10 text-green-400'}, {label: 'DevOps', color: 'bg-blue-500/10 text-blue-400'}]}
                   members={2}
                   comments={12}
                />
                 <IssueCard 
                   id="CRM-134" 
                   title="Update API documentation for v2" 
                   tags={[{label: 'Docs', color: 'bg-purple-500/10 text-purple-400'}]}
                   members={1}
                />
              </div>
            </div>

             {/* Column 2: Todo */}
             <div className="w-72 flex flex-col flex-shrink-0">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  To Do <span className="text-gray-600">24</span>
                </div>
                <Plus size={14} className="cursor-pointer hover:text-white" />
              </div>
              
              <div className="space-y-3">
                <IssueCard 
                   id="CRM-142" 
                   title="Sales planning and monitoring of important transactions" 
                   tags={[{label: 'High', color: 'bg-red-500/10 text-red-400'}]}
                   members={3}
                   comments={4}
                   progress={20}
                />
                <IssueCard 
                   id="CRM-156" 
                   title="Analyze, cluster, and understand search queries" 
                   tags={[{label: 'Research', color: 'bg-orange-500/10 text-orange-400'}]}
                   image="https://picsum.photos/300/150"
                   members={4}
                   comments={8}
                />
              </div>
            </div>

             {/* Column 3: In Progress */}
             <div className="w-72 flex flex-col flex-shrink-0">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  In Progress <span className="text-gray-600">3</span>
                </div>
                <Plus size={14} className="cursor-pointer hover:text-white" />
              </div>
              
              <div className="space-y-3">
                <IssueCard 
                   id="CRM-111" 
                   title="Find the respondents for the moderated testing" 
                   tags={[{label: 'Medium', color: 'bg-yellow-500/10 text-yellow-400'}, {label: 'QA', color: 'bg-pink-500/10 text-pink-400'}]}
                   members={2}
                   comments={2}
                   progress={50}
                />
                 <IssueCard 
                   id="CRM-102" 
                   title="Conduct custdev interview w/ existing client" 
                   tags={[{label: 'Medium', color: 'bg-yellow-500/10 text-yellow-400'}]}
                   members={1}
                   progress={90}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Sub-component for Cards
interface IssueCardProps {
  id: string;
  title: string;
  tags: {label: string; color: string}[];
  members?: number;
  comments?: number;
  image?: string;
  progress?: number;
}

const IssueCard: React.FC<IssueCardProps> = ({ id, title, tags, members, comments, image, progress }) => {
  return (
    <div className="bg-[#161b22] border border-white/5 p-3 rounded-lg shadow-sm hover:border-white/20 transition-all cursor-pointer group">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs text-gray-500 font-mono group-hover:text-blue-400 transition-colors">{id}</span>
        <MoreHorizontal size={14} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <h4 className="text-gray-200 text-sm font-medium mb-3 leading-snug">
        {title}
      </h4>

      {image && (
        <div className="mb-3 rounded overflow-hidden">
          <img src={image} alt="attachment" className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      )}

      {progress !== undefined && (
        <div className="w-full bg-gray-700 h-1 rounded-full mb-3 overflow-hidden">
          <div className="bg-blue-500 h-full rounded-full" style={{width: `${progress}%`}}></div>
        </div>
      )}

      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((t, i) => <Tag key={i} label={t.label} color={t.color} />)}
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 text-[10px]">
           {comments && (
             <div className="flex items-center gap-1">
               <MessageSquare size={10} />
               <span>{comments}</span>
             </div>
           )}
           <div className="flex -space-x-1.5">
             {[...Array(members || 1)].map((_, i) => (
               <div key={i} className="w-4 h-4 rounded-full bg-gray-600 border border-[#161b22]"></div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AppInterface;