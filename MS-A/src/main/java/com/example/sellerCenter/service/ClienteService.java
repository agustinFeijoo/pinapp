package com.example.sellerCenter.service;

import com.example.sellerCenter.entity.Cliente;
import com.example.sellerCenter.exception.ResourceNotFoundException;
import com.example.sellerCenter.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository repository;

    public Cliente crear(Cliente cliente) {
        return repository.save(cliente);
    }

    public List<Cliente> obtenerTodos() {
        return repository.findAll();
    }

    public Cliente obtenerPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente not found with id: " + id));
    }

    public Map<String, Double> calcularKpi() {
        List<Cliente> clientes = repository.findAll();

        double promedio = clientes.stream()
                .mapToInt(Cliente::getEdad)
                .average()
                .orElse(0);

        double desviacion = Math.sqrt(
                clientes.stream()
                        .mapToDouble(c -> Math.pow(c.getEdad() - promedio, 2))
                        .average()
                        .orElse(0)
        );

        return Map.of(
                "promedioEdad", promedio,
                "desviacionEstandar", desviacion
        );
    }
}