import axios from "axios";
import { listarClientes } from "../../src/services/clientes.service";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("clientes.service", () => {
  it("should return list of clients", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [{ id: 1, nombre: "Juan" }]
    });

    const result = await listarClientes();

    expect(result).toEqual([{ id: 1, nombre: "Juan" }]);
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});