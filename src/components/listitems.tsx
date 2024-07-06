import Link from 'next/link';

interface ListItemProps {
  items: {
    label: string;
    path: string;
  }[];
}

const ListItem: React.FC<ListItemProps> = ({ items }) => {
  return (
    <ul className="list-none p-0 bg-slate-200 w-96 border rounded-lg border-slate-500 ">
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer py-2 px-4 text-gray-700 hover:text-white" 
        >
          <Link href={item.path} className='text-md text-start' >
            <div className='font-semibold border p-2 rounded-full bg-slate-300 hover:bg-blue-400'>{item.label}</div>
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default ListItem;
