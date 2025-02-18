import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { DevConfigService } from './common/providers/DevConfigService';


const devConfig = { port: 3000 };
const proConfig = { port: 5000 };

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: DevConfigService,
      useClass: DevConfigService
    },
    {
      provide: "CONFIG",
      useFactory: () => {
        return process.env.NODE_ENV === 'development' ? devConfig : proConfig;
      }
    }
  ],
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
  consumer.apply (LoggerMiddleware). forRoutes ('songs');
  }
}
