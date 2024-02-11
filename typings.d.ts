interface ICurrentProps {
    name: string;
    dt: number;
    timestamp: number;
    main: {
        temp: number;
    };
    weather: WeatherData[];
    wind: {
        speed: string;
    };
}

interface IFiveDaysProps {
    list: {
        main: {
            temp: number;
        };
        weather: WeatherData[];
        wind: {
            speed: string;
        };
        dt_txt: string;
    }[];
}
