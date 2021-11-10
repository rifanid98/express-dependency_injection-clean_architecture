import { UserRepository } from "domain/repository/user.repository";
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { singleton } from "tsyringe";

@singleton()
@EntityRepository(User)
export class UserLocalRepository
  extends Repository<User>
  implements UserRepository
{
  createUser(user: User): Promise<User> {
    return this.save(user);
  }

  getAllUsers(): Promise<User[]> {
    return this.find();
  }

  getOneUser(user: User): Promise<User> {
    return this.findOne(user);
  }

  getUserById(id: number): Promise<User> {
    return this.findOne(id);
  }

  async updateUser(user: User): Promise<boolean> {
    const updateresult = await this.update(user.id, user);
    return updateresult.affected > 0;
  }
}
