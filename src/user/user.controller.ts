import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get('getUsers')
    async getUsers(): Promise<string[]> {
        return this.userService.findAll();
    }

    @Post('createUser')
    async createUser(): Promise<string[]> {
        return this.userService.create();
    }

    @Put('updateUser')
    async updateUser(): Promise<string[]> {
        return this.userService.update();
    }

    @Delete('deleteUser')
    async deleteUser() {
        return this.userService.delete
    }
 }
