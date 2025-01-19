import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString, isDate } from "class-validator";

export class CreateSongDTO {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    readonly artists: string[];

    @IsString()
    @IsNotEmpty()
    readonly album: string;

    @IsDateString()
    @IsNotEmpty()
    readonly year: Date;

    @IsArray()
    @IsNotEmpty()
    readonly genre: string[];

    @IsDateString()
    @IsNotEmpty()
    readonly releaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;
}