
export default function Clickthrough({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) {
    return (
        <div className={`flex flex-row justify-end w-0.9 mb-4 ${className || ''}`}>
            <a href={href} className="flex" > 
                {children}
            </a>
                <div className="ml-2">{">"}</div>
        </div>
    );
}