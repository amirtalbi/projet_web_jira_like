import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { username, email, password } = createUserDto;
        const user = new this.userModel({ username, email, password });
        return user;
    }

    async findOne(findUserDto: FindUserDto): Promise<User | null> {
        const user = await this.userModel.findOne({ email: findUserDto});
        if(!user) {
            return null;
        }
        return user;
    }

    async find(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    
    async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
    
    async remove(id: string): Promise<User | null> {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
