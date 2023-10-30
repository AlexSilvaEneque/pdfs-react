"use client"

import { Sale } from '@/interfaces/sale'
import { convertoDDMMYYYY, formatCurrency } from '@/utils'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

export default function PDFComponent({sale}:{sale : Sale | null}) {
    return (
        <div className='h-screen'>
            <PDFViewer width={"100%"} height={"100%"}>
                <Document>
                    <Page size="A6" style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.tag}>Boleta de venta</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Fecha de venta:</Text>
                            <Text>{sale?.date ? convertoDDMMYYYY(sale?.date) : ''}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Cliente:</Text>
                            <Text>{sale?.client?.name}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Vendedor:</Text>
                            <Text>{sale?.user?.first_name}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Estado de venta:</Text>
                            <Text>{sale?.statusPayment ? 'Pagada' : 'Pendiente de pago'}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Detalle de venta</Text>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.row}>
                                <Text style={styles.cell}>Producto</Text>
                                <Text style={styles.cell}>Cantidad</Text>
                                <Text style={styles.cell}>Precio</Text>
                            </View>
                            {sale?.detailProducts.map((dp) => (
                                <View style={styles.row}>
                                    <Text style={styles.cell}>{dp.products.name}</Text>
                                    <Text style={styles.cell}>{dp.quantity}</Text>
                                    <Text style={styles.cellThird}>{formatCurrency(Number(dp.products.price?.$numberDecimal))}</Text>
                                </View>
                            ))}
                        </View>
                        <View style={styles.finalSection}>
                            <Text>Total pagado:</Text>
                            <Text>{formatCurrency(Number(sale?.total.$numberDecimal))}</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}

const styles = StyleSheet.create({
    page: {
        fontSize: 12,
        fontFamily: 'Courier',
        marginVertical: 10
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 2,
        padding: 2
    },
    finalSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 2,
        padding: 10
    },
    tag: {
        fontSize: 14,
        marginBottom: 2
    },
    table: {
        marginHorizontal: 10
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'solid',
    },
    cell: {
        flex: 1,
        borderLeftColor: '#000',
        borderLeftWidth: 0,
        borderRightColor: '#000',
        borderStyle: 'solid',
        padding: 10,
    },
    cellThird: {
        flex: 1,
        textAlign: 'right',
        borderLeftColor: '#000',
        borderLeftWidth: 0,
        borderRightColor: '#000',
        borderStyle: 'solid',
        padding: 10,
    },
})