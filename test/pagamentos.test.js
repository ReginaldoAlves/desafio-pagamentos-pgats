import { realizarPagamento, consultarUltimoPagamento } from "../src/pagamentos.js";
import assert from 'node:assert'

describe ('Testes dos Pagamentos', () => {

    describe('Teste de Realizar Pagamento', () => {

        it('Pagar algo caro (> R$100)', () => {

            // Arrange
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 100.01;

            // Act
            realizarPagamento(codigoBarras, empresa, valor);
            const resultado = consultarUltimoPagamento();

            // Assert
            assert.equal(resultado.codigoBarras, codigoBarras);
            assert.equal(resultado.empresa, empresa);
            assert.equal(resultado.valor, valor);
            assert.equal(resultado.categoria, 'cara');
        }); 

        it('Pagar algo padrão (<= R$100)', () => {

            // Arrange
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 100;

            // Act
            realizarPagamento(codigoBarras, empresa, valor);
            const resultado = consultarUltimoPagamento();

            // Assert
            assert.equal(resultado.codigoBarras, codigoBarras);
            assert.equal(resultado.empresa, empresa);
            assert.equal(resultado.valor, valor);
            assert.equal(resultado.categoria, 'padrão');
        }); 

    });

});