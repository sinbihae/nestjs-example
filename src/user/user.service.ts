import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService { 
    private readonly users: string[] = [];

    findAll(): string[] {
        return this.users;
    }

    create(): string[] {
        return this.users;
    }

    update(): string[] {
        return this.users;
    }

    delete() {
        console.log("Delete Users")
    }
}
