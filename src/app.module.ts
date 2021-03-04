import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  /* Controllers control how we handle incoming request.
  They are responsible for accepting incoming requests, 
  doing something with those requests and sending
  back responses.

  Providers are extra classes that can be injected 
  into controllers or other providers to provide 
  extra services such as getting data from a database.
  */
  controllers: [AppController],
  providers: [AppService],
})
/* The module bundles up the different features in the app. */
export class AppModule {}
