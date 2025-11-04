'use client';

import { useState } from "react";
import { Card } from "@/layout/card";
import { useAccountStore, Transaction } from "@/store/accountStore";
import Link from "next/link";
import { Button } from "@/components/button";
import { Modal } from "@/layout/modal";
import { TransactionForm } from "@/app/_transaction-form";
import { TransactionView } from "../_transaction-view";

export default function Transactions() {
  const { transactions, removeTransaction } = useAccountStore();
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [transactionToRemove, setTransactionToRemove] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const handleEdit = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleView = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

 const handleRemove = (transaction: Transaction) => {
    setTransactionToRemove(transaction.id);
    setIsConfirmModalOpen(true);
  };

   const confirmRemove = () => {
    if (transactionToRemove) {
      removeTransaction(transactionToRemove);
      setTransactionToRemove(null);
      setIsConfirmModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTransaction(null);
  };

  return (
    <main className="w-2/3 mx-auto mt-5">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-700">Todas as Transações</h1>
          <Link href="/" className="text-primary font-medium hover:underline">
            Voltar
          </Link>
        </div>
        {transactions.length === 0 ? (
          <div className="py-8 text-center text-gray-500">
            <p>Nenhuma transação encontrada.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Descrição</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Tipo</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Valor</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Data</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Ações</th>
                </tr>
              </thead>
              <tbody>
                {sortedTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-gray-700">{transaction.description}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${transaction.type === 'income'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                        }`}>
                        {transaction.type === 'income' ? 'Receita' : 'Despesa'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'} font-medium text-right block`}>
                        {transaction.type === 'expense' && '- '}
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(transaction.amount)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      <span>
                        {new Date(transaction.date).toLocaleDateString('pt-BR')}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleView(transaction)}
                          className="text-xs px-2 py-1"
                        >
                          Ver detalhes
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleEdit(transaction)}
                          className="text-xs px-2 py-1"
                        >
                          Editar
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleRemove(transaction)}
                          className="text-xs px-2 py-1 text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                        >
                          Remover
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Editar Transação
        </h2>
        <TransactionForm onSuccess={handleCloseModal} transactionToEdit={editingTransaction} />
      </Modal>

      <Modal
        isOpen={!!selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
      >
        {selectedTransaction &&
          <TransactionView
            transaction={selectedTransaction}
            onEdit={() => {
              handleEdit(selectedTransaction);
              setSelectedTransaction(null);
            }}
            onDelete={() => {
              handleRemove(selectedTransaction)
              setSelectedTransaction(null);
            }} />
        }
      </Modal>

      <Modal isOpen={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)}>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Confirmar Remoção</h2>
        <p className="text-gray-600 mb-6">Tem certeza que deseja remover esta transação?</p>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => setIsConfirmModalOpen(false)}>
            Cancelar
          </Button>
          <Button variant="error" onClick={confirmRemove}>
            Confirmar
          </Button>
        </div>
      </Modal>
    </main>
  );
}
