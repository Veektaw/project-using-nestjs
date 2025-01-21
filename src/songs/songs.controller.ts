import { Controller, Get, Post, Body, Param, Delete, Put, Query, UseGuards, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus, HttpException, Inject } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
    constructor (
        private songsService: SongsService,
        @Inject("CONNECTION")
        private connection: Connection
    ) {
        console.log(`This is the connection string ${this.connection.CONNECTION_STRING}`)
    };

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

    @Get(":id")
    findOne(): string {
        return `This action returns a song`;
    }

    // @Put(":id")
    // update(): string {
    //     return `This action updates a song`;
    // }

    // @Delete(":id")
    // delete(): string {
    //     return `This action removes a song`;
    // }
}
