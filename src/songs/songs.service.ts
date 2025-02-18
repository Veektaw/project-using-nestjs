import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly songs = [];

    create(song: any) {
        this.songs.push(song);
    }

    findAll() {
        return this.songs;
    }
}
