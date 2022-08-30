import { GetBookmarkDto } from './dto/get-bookmark.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}

  @Get()
  find(@Query() getBookmarkDto: GetBookmarkDto): Bookmark[] {
    if (Object.keys(getBookmarkDto).length) {
      return this.bookmarkService.find(getBookmarkDto);
    }
    return this.bookmarkService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Bookmark {
    return this.bookmarkService.findById(id);
  }

  @Post()
  createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarkService.createBookmark(createBookmarkDto);
  }
}
