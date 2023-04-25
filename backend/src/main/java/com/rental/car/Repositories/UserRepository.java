package com.rental.car.Repositories;

import com.rental.car.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
