type StatisticsProps = {
    number: string;
    title: string;
    background: string;
    textColor: string;
};

export const Statistics = (props: StatisticsProps) => {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-y-4 ${props.background} w-52 md:w-64 h-fit py-4 rounded-lg`}
        >
            <h1 className={`${props.textColor} text-lg md:text-3xl font-medium`}>{props.number}</h1>
            <h1 className={`${props.textColor} text-sm md:text-base`}>{props.title}</h1>
        </div>
    );
};
