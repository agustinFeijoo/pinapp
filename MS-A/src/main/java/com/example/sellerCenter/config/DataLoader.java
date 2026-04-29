package com.example.sellerCenter.config;

import com.example.sellerCenter.entity.Cliente;
import com.example.sellerCenter.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
@RequiredArgsConstructor
public class DataLoader {

    private final ClienteRepository repository;

    @Bean
    CommandLineRunner initDatabase() {
        return args -> {

            if (repository.count() == 0) { // avoid duplicating on restart

                repository.save(new Cliente(null, "Juan", "Perez", 30, LocalDate.of(1994, 1, 1)));
                repository.save(new Cliente(null, "Ana", "Gomez", 40, LocalDate.of(1984, 5, 10)));
                repository.save(new Cliente(null, "Luis", "Martinez", 25, LocalDate.of(1999, 3, 15)));

                System.out.println("Sample clients loaded 🚀");
            }
        };
    }
}