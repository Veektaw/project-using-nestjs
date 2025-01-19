import { Controller, Get, Post, Body, Param, Delete, Put, Query, UseGuards, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus, HttpException } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor (private songsService: SongsService) {};

    @Post()
    create(@Body() createSong: CreateSongDTO)  {
        return this.songsService.create(createSong);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (e) {
            console.log(e);
            throw new HttpException(`Server Error`, HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e
            });
        }

        
    }

    // @Get(":id")
    // findOne(): string {
    //     return `This action returns a song`;
    // }

    // @Put(":id")
    // update(): string {
    //     return `This action updates a song`;
    // }

    // @Delete(":id")
    // delete(): string {
    //     return `This action removes a song`;
    // }
}
