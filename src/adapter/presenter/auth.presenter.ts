import { User } from "domain/entity/user.entity";
import { singleton } from "tsyringe";

interface AuthPresenterInterface {
  show(entity: User): User;
  showAll(entity: User): User;
  json(entity: User): User;
}

export class AuthPresenter implements AuthPresenterInterface {
  json(entity: User): User {
    return undefined;
  }

  show(entity: User): User {
    return undefined;
  }

  showAll(entity: User): User {
    return undefined;
  }
}

@singleton()
export class AuthPresenterImpl extends AuthPresenter {
  show(entity: User): User {
    const presenter = new User();
    presenter.id = entity.id;
    presenter.email = entity.email;
    presenter.authenticator = entity.authenticator;
    return presenter;
  }

  showAll(entity: User): User {
    const presenter = new User();
    Object.keys(entity).forEach((key: string) => {
      if (key !== "password") {
        presenter[key] = entity[key];
      }
    });
    return presenter;
  }

  json(entity: User): User {
    return { ...entity };
  }
}
