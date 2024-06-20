export default function ResultCard() {
    return (
        <div className="p-12 w-full flex flex-col items-center gap-y-8">
            <span className="text-center text-lg uppercase tracking-widest text-orange-600">
                Congratulations!
            </span>
            <span className="text-center">
                <h1 className="text-5xl font-medium leading-relaxed">
                    Result available
                </h1>
                <p className="f ont-normal text-lg leading-relaxed text-gray-600">
                    you can come back and continue
                </p>
            </span>
        </div>

    );
}
