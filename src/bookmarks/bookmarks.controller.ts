import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.bookmarkService.findAll();
  }

  @Post()
  createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarkService.createBookmark(createBookmarkDto);
  }
}
