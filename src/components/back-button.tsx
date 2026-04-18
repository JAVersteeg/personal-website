
export default function BackHome({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-row justify-start w-0.9">
        <div className="mr-2">{"<"}</div>
            <a href={href} className="flex" > 
                {children}
            </a>
        </div>
    );
}