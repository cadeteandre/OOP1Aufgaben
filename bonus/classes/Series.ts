import Episode from "./Episode";

class Serie {
    _title: string;
    _description: string;
    _startYear: number;
    _endYear: number | string;
    _episodes: Episode[];

    
    constructor(title: string, description: string, startYear: number, endYear: number | string, episodes: Episode[]) {
        this._title = title;
        this._description = description;
        this._startYear = startYear;
        this._endYear = endYear;
        this._episodes = episodes;
    }
}

export default Serie;