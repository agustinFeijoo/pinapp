package com.example.sellerCenter.repository;

import com.example.sellerCenter.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}