import { User as UserEntity } from "core/entity/user.entity";
import { AuthRepositoryInterface } from "core/port/repository/auth.repository";
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { singleton } from "tsyringe";

@singleton()
@EntityRepository(User)
export class AuthLocalRepository
  extends Repository<User>
  implements AuthRepositoryInterface
{
  signup(user: UserEntity): Promise<UserEntity> {
    return this.save(user);
  }

  signin(user: UserEntity): Promise<UserEntity> {
    delete user.created_at;
    delete user.deleted_at;
    delete user.updated_at;
    return this.findOne(user);
  }
}
