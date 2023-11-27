"use client"

import { SaleRojas } from '@/interfaces/saleRojas'
import { convertoDDMMYYYY, formatCurrency, splitDate } from '@/utils'
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer'

export default function PDFComponent({sale}:{sale : SaleRojas | null}) {
    return (
        <div className='h-screen'>
            <PDFViewer width={"100%"} height={"100%"}>
                <Document>
                    <Page size="A5" style={styles.page}>
                        {/* TODO: header */}
                        <View style={{
                            paddingHorizontal: 2,
                            marginBottom: 8
                        }}>
                            <View style={{
                                display:'flex',
                                flexDirection: 'row'
                            }}>
                                <Image src={'/LOGO-MR.png'} style={{
                                    width: "15%"
                                }} />

                                <View style={{
                                    width: "65%"
                                }}>
                                    
                                    <View style={{
                                        color: "#413F7E"
                                    }}>
                                        <Text style={{
                                            alignSelf: 'center',
                                            fontSize: 12
                                        }}>
                                            MUEBLES ROJAS E INVERSIONES
                                        </Text>
                                        <Text style={{
                                            fontSize: 8,
                                            alignSelf: 'center',
                                        }}>
                                            EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMITADA
                                        </Text>
                                    </View>

                                    <View style={{
                                        marginTop: 2,
                                        border: 1,
                                        borderColor: "#706AA1",
                                        borderRadius: 5,
                                        paddingBottom: 2,
                                        backgroundColor: "#AFB9F5",
                                        color: "#413F7E"
                                    }}>
                                        <Text style={{
                                            fontSize: 8,
                                            alignSelf: 'center',
                                        }}>
                                            Principal: Av. Manuel Seoane N° 299 - Chep&eacute;n
                                        </Text>
                                        <Text style={{
                                            fontSize: 8,
                                            alignSelf: 'center',
                                        }}>
                                            Frente al Parque Santa Rosa
                                        </Text>
                                        <Text style={{
                                            fontSize: 8,
                                            alignSelf: 'center'
                                        }}>
                                            Sucursal: Av. Gonzales C&aacute;ceda N° 421 - Chep&eacute;n
                                        </Text>
                                    </View>
                                </View>

                                <View style={{
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                        width: '90%',
                                        border: 1,
                                        borderColor: "#706AA1"
                                    }}>
                                        <View style={{
                                            backgroundColor: '#AFB9F5',
                                            color: "white"
                                        }}>
                                            <Text style={{
                                                alignSelf: 'center',
                                                paddingVertical: 2
                                            }}>NOTA DE PEDIDO</Text>
                                        </View>
                                        <Text style={{
                                            alignSelf: 'center',
                                            paddingVertical: 6,
                                            color: "red"
                                        }}>N° {sale?.numberNota!}</Text>
                                    </View>
                                    <Text style={{
                                        fontSize: 9,
                                        paddingHorizontal: 3,
                                        marginTop: 2,
                                        color: "#413F7E"
                                    }}>RUC N°20600117425</Text>
                                </View>
                            </View>

                            <View style={{
                                display:'flex',
                                flexDirection: 'row',
                                marginTop: 5,
                            }}>
                                <View style={{
                                    width: "75%",
                                    color: "#413F7E"
                                }}>
                                    <Text style={{
                                        width: "100%",
                                        fontSize: 8
                                    }}>
                                        Venta de Melamine, MDF, Nordex, accesorios al por mayor y menor
                                    </Text>
                                    <Text style={{
                                        fontSize: 8,
                                        alignSelf: 'center'
                                    }}>
                                        Servicio de corte y tapacanto
                                    </Text>
                                </View>
                                
                                <View style={{
                                    width: "25%",
                                    alignItems: 'center',
                                    fontSize: 9
                                }}>
                                    <View style={{
                                        width: '80%',
                                        border: 1,
                                        borderColor: "#706AA1"
                                    }}>
                                        <View style={{
                                            backgroundColor: '#AFB9F5',
                                            color: "white",
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-around'
                                        }}>
                                            <Text style={{
                                                alignSelf: 'center',
                                                paddingVertical: 2,
                                            }}>DIA</Text>
                                            <Text style={{
                                                alignSelf: 'center',
                                                paddingVertical: 2
                                            }}>MES</Text>
                                            <Text style={{
                                                alignSelf: 'center',
                                                paddingVertical: 2
                                            }}>A&Ntilde;O</Text>
                                        </View>

                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-around'
                                        }}>
                                            <Text style={{
                                                alignSelf: 'center',
                                                paddingVertical: 2
                                            }}>{ sale?.date ? splitDate(sale?.date!).day : '01' }</Text>
                                            <Text style={{
                                                alignSelf: 'center',
                                                paddingVertical: 2
                                            }}>{ sale?.date ? splitDate(sale?.date!).month : '01' }</Text>
                                            <Text style={{
                                                alignSelf: 'center',
                                                paddingVertical: 2
                                            }}>{ sale?.date ? splitDate(sale?.date!).year : '1900' }</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* datos del cliente */}
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginVertical: 5,
                                fontSize: 9,
                                paddingHorizontal: 3
                            }}>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '65%',
                                    color: "#413F7E",
                                    alignItems: 'center'
                                }}>
                                    <Text>Señor(a):</Text>
                                    <Text style={{
                                        marginLeft: 3,
                                        fontSize: 11
                                    }}>{ sale?.client.name }</Text>
                                </View>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    color: "#413F7E",
                                    alignItems: 'center'
                                }}>
                                    <Text>Doc:</Text>
                                    <Text style={{
                                        marginLeft: 3,
                                        fontSize: 11
                                    }}></Text>
                                </View>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginVertical: 5,
                                fontSize: 9,
                                paddingHorizontal: 3
                            }}>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '65%',
                                    color: "#413F7E",
                                    alignItems: 'center'
                                }}>
                                    <Text>Direcci&oacute;n:</Text>
                                    <Text style={{
                                        marginLeft: 3,
                                        fontSize: 11
                                    }}>{ sale?.client.address }</Text>
                                </View>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    color: "#413F7E",
                                    alignItems: 'center'
                                }}>
                                    <Text>Tel&eacute;fono:</Text>
                                    <Text style={{
                                        marginLeft: 3,
                                        fontSize: 11
                                    }}>{ sale?.client.phone }</Text>
                                </View>
                            </View>

                        </View>
                        {/* fin header */}

                        <View style={styles.table}>
                            <View style={styles.rowHeader}>
                                <Text style={styles.cell1}>CANT.</Text>
                                <Text style={styles.cell2}>DESCRIPCION</Text>
                                <Text style={styles.cell3}>P.UNIT.</Text>
                                <Text style={styles.cell4}>IMPORTE</Text>
                            </View>
                            {sale?.details.map((dp) => (
                                <View style={styles.row}>
                                    <Text style={styles.cell1}>{dp.quantity}</Text>
                                    <Text style={styles.cell2}>{dp.product.name}</Text>
                                    <Text style={styles.cell3}>{formatCurrency(dp.product.price_sale)}</Text>
                                    <Text style={styles.cell4}>{formatCurrency(Number(dp.product.price_sale * dp.quantity))}</Text>
                                </View>
                            ))}
                        </View>
                        
                        <View style={styles.finalSection}>
                            <Text>Total:</Text>
                            <Text>{formatCurrency(Number(sale?.total))}</Text>
                        </View>

                        <View style={{
                            color: "#413F7E",
                            marginTop: 8,
                            paddingHorizontal: 5,
                            fontSize: 8
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text>Nota:</Text>
                                <Text>Una vez recibida la mercadería no hay lugar a cambio</Text>
                            </View>
                            
                            <Text style={{
                                marginLeft: 25
                            }}>No se aceptan cambios ni devoluciones</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}

const styles = StyleSheet.create({
    page: {
        fontSize: 10,
        fontFamily: 'Courier',
        marginVertical: 15,
        paddingHorizontal: 4
    },
    headerSection: {
        width: "100%",
        display: 'flex'
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
        fontSize: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 2,
        color: "#413F7E"
    },
    tag: {
        fontSize: 11,
        marginBottom: 2
    },
    table: {
        marginHorizontal: 4,
        marginTop: 5,
        border: 1,
        borderRadius: 4,
        overflow: 'hidden',
        color: "#413F7E",
        borderColor: "#413F7E"
    },
    rowHeader: {
        flexDirection: 'row',
        // borderTop: 1,
        borderBottom: 1,
        borderBottomColor: '#413F7E',
        borderStyle: 'solid',
        fontSize: 9,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#413F7E',
        borderStyle: 'solid',
        fontSize: 8
    },
    cell1: {
        width: '10%',
        padding: 10,
    },
    cell2: {
        width: '60%',
        borderLeftColor: '#413F7E',
        borderLeftWidth: 1,
        borderRightColor: '#413F7E',
        borderStyle: 'solid',
        padding: 10,
    },
    cell3: {
        width: '15%',
        borderLeftColor: '#413F7E',
        borderLeftWidth: 1,
        borderRightColor: '#413F7E',
        borderStyle: 'solid',
        padding: 10,
    },
    cell4: {
        width: '15%',
        textAlign: 'right',
        borderLeftColor: '#413F7E',
        borderLeftWidth: 1,
        borderStyle: 'solid',
        padding: 10,
    },
})