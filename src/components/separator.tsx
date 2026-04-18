export default function Separator({ className }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center ${className || ''}`}>
            <div className="separator bg-border my-4"></div>
        </div>
    );
}