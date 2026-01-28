interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="relative bg-gradient-to-br from-primary via-primary to-secondary py-20 md:py-28">
            <div className="absolute inset-0 bg-[url('/img/PM11/PM11_1.jpeg')] opacity-10 bg-cover bg-center" />
            <div className="relative container mx-auto px-4 text-center text-white">
                <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4 drop-shadow-lg">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-white/90">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
