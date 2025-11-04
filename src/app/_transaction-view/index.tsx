import { Button } from "@/components/button";
import { Transaction } from "@/store/accountStore";

interface TransactionViewProps {
    transaction: Transaction;
    onEdit: (transaction: Transaction) => void;
    onDelete: (transaction: Transaction) => void;
}

export function TransactionView({ transaction, onEdit, onDelete }: TransactionViewProps) {

    return (
        <>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
                Detalhes da Transação
            </h2>
            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descrição</label>
                    <p className="mt-1 text-gray-900">{transaction.description}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo</label>
                    <p className="mt-1">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${transaction.type === 'income'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                            }`}>
                            {transaction.type === 'income' ? 'Receita' : 'Despesa'}
                        </span>
                    </p>

                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Valor</label>
                    <p className={`mt-1 text-xl font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.type === 'expense' && '- '}
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(transaction.amount)}
                    </p>
                </div>
                <div>
                    <p><strong>Data:</strong> {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(transaction.date))}</p>
                </div>
                <div className="pt-4 flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => onEdit(transaction)}
                        className="flex-1"
                    >
                        Editar
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => onDelete(transaction)}
                        className="flex-1 text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                    >
                        Remover
                    </Button>
                </div>
            </div>
        </>);
}