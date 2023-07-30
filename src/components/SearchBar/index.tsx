import React from 'react';

export function SearchBar({
    value,
    onChange,
    onClear,
}: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
}) {
    return (
        <div className='flex flex-row ml-20 min-w-fit w-1/2 items-center align-middle justify-items-center'>
            <input
                className='text-action outline-none font-comic justify-self-start pl-4 p-2 flex-auto rounded-l-full border border-action'
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search..."
            />
            {onClear && (
                <button
                    className="flex-none font-comic text-left border border-action rounded-r-full pr-4 p-2 text-white bg-action"
                    onClick={onClear} 
                >
                    Clear
                </button>
            )}
        </div>
    );
}
