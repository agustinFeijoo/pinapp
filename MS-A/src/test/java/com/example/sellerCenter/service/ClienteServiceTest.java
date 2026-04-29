package com.example.sellerCenter.service;

import com.example.sellerCenter.entity.Cliente;
import com.example.sellerCenter.repository.ClienteRepository;
import com.example.sellerCenter.service.ClienteService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ClienteServiceTest {

    @Mock
    private ClienteRepository repository;

    @InjectMocks
    private ClienteService service;

    @Test
    void shouldCalculateKpiCorrectly() {
        // given
        List<Cliente> clientes = List.of(
                new Cliente(1L, "Juan", "Perez", 20, LocalDate.of(2004, 1, 1)),
                new Cliente(2L, "Ana", "Gomez", 40, LocalDate.of(1984, 1, 1))
        );

        when(repository.findAll()).thenReturn(clientes);

        // when
        Map<String, Double> result = service.calcularKpi();

        // then
        assertEquals(30.0, result.get("promedioEdad"));
        assertEquals(10.0, result.get("desviacionEstandar"));
    }
}