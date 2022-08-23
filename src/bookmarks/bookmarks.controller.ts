import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.bookmarkService.findAll();
  }

  @Post()
  createBookmark(@Body('url') url, @Body('description') description): Bookmark {
    return this.bookmarkService.createBookmark(url, description);
  }
}
