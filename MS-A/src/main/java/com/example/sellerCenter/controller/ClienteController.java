package com.example.sellerCenter.controller;

import com.example.sellerCenter.entity.Cliente;
import com.example.sellerCenter.service.ClienteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
@Tag(name = "Clientes", description = "Operaciones relacionadas a clientes")
public class ClienteController {

    private final ClienteService service;

    @PostMapping
    @Operation(
            summary = "Crear cliente",
            description = "Crea un nuevo cliente en el sistema"
    )
    @ApiResponse(responseCode = "201", description = "Cliente creado correctamente.",
            content = @Content(schema = @Schema(implementation = Cliente.class)))
    public ResponseEntity<Cliente> crear(@Valid @RequestBody Cliente cliente) {
        Cliente creado = service.crear(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }

    @GetMapping
    @Operation(
            summary = "Listar clientes",
            description = "Obtiene todos los clientes incluyendo fecha probable de fallecimiento"
    )
    public List<Map<String, Object>> listar() {
        return service.obtenerTodos().stream().map(cliente -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", cliente.getId());
            map.put("nombre", cliente.getNombre());
            map.put("apellido", cliente.getApellido());
            map.put("edad", cliente.getEdad());
            map.put("fechaNacimiento", cliente.getFechaNacimiento());

            LocalDate fallecimiento = cliente.getFechaNacimiento().plusYears(80);
            map.put("fechaProbableFallecimiento", fallecimiento);

            return map;
        }).toList();
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Obtener cliente por ID",
            description = "Devuelve un cliente específico por su ID"
    )
    @ApiResponse(responseCode = "200", description = "Cliente encontrado",
            content = @Content(schema = @Schema(implementation = Cliente.class)))
    @ApiResponse(responseCode = "404", description = "Cliente no encontrado")
    public ResponseEntity<Cliente> obtenerPorId(@PathVariable Long id) {
        Cliente cliente = service.obtenerPorId(id);
        return ResponseEntity.ok(cliente);
    }

    @GetMapping("/kpi")
    @Operation(
            summary = "Obtener KPIs",
            description = "Calcula promedio de edad y desviación estándar de los clientes"
    )
    public Map<String, Double> kpi() {
        return service.calcularKpi();
    }
}