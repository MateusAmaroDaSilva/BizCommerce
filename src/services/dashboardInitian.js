export function initialDashboard() {
  const initialDashboard= {
    "success": true,
    "message": "Dados do dashboard carregados com sucesso.",
    "data": {
        "overview": {
            "total_revenue": {
                "value": "9444.25",
                "formatted": "R$ 9.444,25",
                "change": -99.9
            },
            "total_sales": {
                "value": 17,
                "change": -99.3
            },
            "unique_customers": {
                "value": 14,
                "change": -72
            },
            "avg_order_value": {
                "value": "555.544118",
                "formatted": "R$ 555,54",
                "change": -86
            }
        },
        "categories_performance": [
            {
                "id": 1,
                "name": "Boné",
                "revenue": "1009.21",
                "formatted_revenue": "R$ 1.009,21",
                "sales_count": 8,
                "avg_value": "126.151250",
                "products_count": 11,
                "daily_chart": [
                    {
                        "date": "01/06",
                        "value": "882.80"
                    },
                    {
                        "date": "02/06",
                        "value": "126.41"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Tênis",
                "revenue": "646.71",
                "formatted_revenue": "R$ 646,71",
                "sales_count": 2,
                "avg_value": "323.355000",
                "products_count": 15,
                "daily_chart": [
                    {
                        "date": "01/06",
                        "value": "646.71"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Camisas",
                "revenue": "1414.64",
                "formatted_revenue": "R$ 1.414,64",
                "sales_count": 2,
                "avg_value": "707.320000",
                "products_count": 11,
                "daily_chart": [
                    {
                        "date": "01/06",
                        "value": "862.73"
                    },
                    {
                        "date": "02/06",
                        "value": "551.91"
                    }
                ]
            },
            {
                "id": 4,
                "name": "Eletrônicos",
                "revenue": "5151.65",
                "formatted_revenue": "R$ 5.151,65",
                "sales_count": 2,
                "avg_value": "2575.825000",
                "products_count": 11,
                "daily_chart": [
                    {
                        "date": "01/06",
                        "value": "4899.90"
                    },
                    {
                        "date": "02/06",
                        "value": "251.75"
                    }
                ]
            },
            {
                "id": 5,
                "name": "Livros",
                "revenue": "0.00",
                "formatted_revenue": "R$ 0,00",
                "sales_count": 0,
                "avg_value": "0.000000",
                "products_count": 10,
                "daily_chart": []
            },
            {
                "id": 6,
                "name": "Alimentos",
                "revenue": "1081.70",
                "formatted_revenue": "R$ 1.081,70",
                "sales_count": 1,
                "avg_value": "1081.700000",
                "products_count": 10,
                "daily_chart": [
                    {
                        "date": "01/06",
                        "value": "1081.70"
                    }
                ]
            },
            {
                "id": 7,
                "name": "Casa e Jardim",
                "revenue": "0.00",
                "formatted_revenue": "R$ 0,00",
                "sales_count": 0,
                "avg_value": "0.000000",
                "products_count": 5,
                "daily_chart": []
            },
            {
                "id": 8,
                "name": "Esportes",
                "revenue": "0.00",
                "formatted_revenue": "R$ 0,00",
                "sales_count": 0,
                "avg_value": "0.000000",
                "products_count": 5,
                "daily_chart": []
            }
        ],
        "sales_analytics": {
            "status_breakdown": [
                {
                    "status": "pago",
                    "count": 14,
                    "revenue": "9003.74",
                    "percentage": 82.4,
                    "formatted_revenue": "R$ 9.003,74"
                },
                {
                    "status": "pendente",
                    "count": 2,
                    "revenue": "380.07",
                    "percentage": 11.8,
                    "formatted_revenue": "R$ 380,07"
                },
                {
                    "status": "cancelado",
                    "count": 1,
                    "revenue": "60.44",
                    "percentage": 5.9,
                    "formatted_revenue": "R$ 60,44"
                }
            ],
            "payment_methods": [
                {
                    "method": "pix",
                    "count": 10,
                    "revenue": "3063.27",
                    "formatted_revenue": "R$ 3.063,27"
                },
                {
                    "method": "boleto",
                    "count": 1,
                    "revenue": "128.32",
                    "formatted_revenue": "R$ 128,32"
                },
                {
                    "method": "mastercard",
                    "count": 5,
                    "revenue": "6192.22",
                    "formatted_revenue": "R$ 6.192,22"
                },
                {
                    "method": "visa",
                    "count": 1,
                    "revenue": "60.44",
                    "formatted_revenue": "R$ 60,44"
                }
            ]
        },
        "profit_analysis": {
            "total_revenue": "9303.91",
            "total_cost": "4928.27",
            "total_profit": "4375.64",
            "profit_margin": 47,
            "formatted": {
                "revenue": "R$ 9.303,91",
                "cost": "R$ 4.928,27",
                "profit": "R$ 4.375,64"
            }
        },
        "charts_data": {
            "daily_sales": [
                {
                    "date": "01/06",
                    "revenue": "8514.18",
                    "count": 14
                },
                {
                    "date": "02/06",
                    "revenue": "930.07",
                    "count": 3
                }
            ],
            "weekly_comparison": [
                {
                    "day": "Fri",
                    "date": "30/05",
                    "revenue": "10103.84",
                    "count": 18
                },
                {
                    "day": "Sat",
                    "date": "31/05",
                    "revenue": "4214.18",
                    "count": 16
                },
                {
                    "day": "Sun",
                    "date": "01/06",
                    "revenue": "8514.18",
                    "count": 14
                },
                {
                    "day": "Mon",
                    "date": "02/06",
                    "revenue": "930.07",
                    "count": 3
                },
                {
                    "day": "Tue",
                    "date": "03/06",
                    "revenue": "0.00",
                    "count": 0
                },
                {
                    "day": "Wed",
                    "date": "04/06",
                    "revenue": "0.00",
                    "count": 0
                },
                {
                    "day": "Thu",
                    "date": "05/06",
                    "revenue": "0.00",
                    "count": 0
                }
            ]
        },
        "recent_activities": {
            "recent_sales": [
                {
                    "id": 1867,
                    "customer": "Bella Jasmin Vieira",
                    "amount": 551.91,
                    "formatted_amount": "R$ 551,91",
                    "status": "pago",
                    "date": "02/06/2025 04:35"
                },
                {
                    "id": 1865,
                    "customer": "Srta. Tábata Marinho",
                    "amount": 251.75,
                    "formatted_amount": "R$ 251,75",
                    "status": "pendente",
                    "date": "02/06/2025 04:33"
                },
                {
                    "id": 1868,
                    "customer": "Sr. Benjamin Meireles Queirós",
                    "amount": 126.41,
                    "formatted_amount": "R$ 126,41",
                    "status": "pago",
                    "date": "02/06/2025 01:26"
                },
                {
                    "id": 4133,
                    "customer": "Miguel Santos",
                    "amount": 60.440000000000005,
                    "formatted_amount": "R$ 60,44",
                    "status": "cancelado",
                    "date": "02/06/2025 01:08"
                },
                {
                    "id": 1866,
                    "customer": "Dr. Ian Mauro Marés",
                    "amount": 510.68,
                    "formatted_amount": "R$ 510,68",
                    "status": "pago",
                    "date": "01/06/2025 20:29"
                },
                {
                    "id": 2026,
                    "customer": "Sr. Fernando Lira Neto",
                    "amount": 159.9,
                    "formatted_amount": "R$ 159,90",
                    "status": "pago",
                    "date": "01/06/2025 12:05"
                },
                {
                    "id": 2027,
                    "customer": "Srta. Tábata Marinho",
                    "amount": 105.80000000000001,
                    "formatted_amount": "R$ 105,80",
                    "status": "pago",
                    "date": "01/06/2025 12:05"
                },
                {
                    "id": 2024,
                    "customer": "Dr. Sueli Casanova Jr.",
                    "amount": 99.9,
                    "formatted_amount": "R$ 99,90",
                    "status": "pago",
                    "date": "01/06/2025 12:05"
                },
                {
                    "id": 2025,
                    "customer": "Isaac de Arruda",
                    "amount": 249.39000000000001,
                    "formatted_amount": "R$ 249,39",
                    "status": "pago",
                    "date": "01/06/2025 12:05"
                },
                {
                    "id": 2028,
                    "customer": "Bella Jasmin Vieira",
                    "amount": 41.81,
                    "formatted_amount": "R$ 41,81",
                    "status": "pago",
                    "date": "01/06/2025 12:05"
                }
            ],
            "recent_products": [
                {
                    "id": 81,
                    "description": "Produto de",
                    "brand": "Nike",
                    "date": "01/06/2025 15:05"
                },
                {
                    "id": 31,
                    "description": "Camisa Social Hugo Boss",
                    "brand": "Hugo Boss",
                    "date": "31/05/2025 19:22"
                },
                {
                    "id": 60,
                    "description": "tempora doloremque aut Livros",
                    "brand": "Vale Comercial Ltda.",
                    "date": "31/05/2025 17:18"
                },
                {
                    "id": 51,
                    "description": "O Alquimista",
                    "brand": "Paulo Coelho",
                    "date": "30/05/2025 15:15"
                },
                {
                    "id": 9,
                    "description": "veritatis suscipit autem Boné",
                    "brand": "Salgado-Gonçalves",
                    "date": "26/05/2025 08:21"
                }
            ]
        },
        "top_products": [
            {
                "id": 43,
                "description": "Tablet iPad Air",
                "brand": "Apple",
                "revenue": "4899.90",
                "formatted_revenue": "R$ 4.899,90",
                "sales_count": 1
            },
            {
                "id": 68,
                "description": "necessitatibus ut id Alimentos",
                "brand": "Rodrigues-Leal",
                "revenue": "1081.70",
                "formatted_revenue": "R$ 1.081,70",
                "sales_count": 1
            },
            {
                "id": 37,
                "description": "ad dolore sit Camisas",
                "brand": "Rodrigues Comercial Ltda.",
                "revenue": "862.73",
                "formatted_revenue": "R$ 862,73",
                "sales_count": 1
            },
            {
                "id": 31,
                "description": "Camisa Social Hugo Boss",
                "brand": "Hugo Boss",
                "revenue": "551.91",
                "formatted_revenue": "R$ 551,91",
                "sales_count": 1
            },
            {
                "id": 25,
                "description": "ullam error sint Tênis",
                "brand": "Leon e Benites S.A.",
                "revenue": "510.68",
                "formatted_revenue": "R$ 510,68",
                "sales_count": 1
            },
            {
                "id": 45,
                "description": "Fone JBL Tune 510BT",
                "brand": "JBL",
                "revenue": "251.75",
                "formatted_revenue": "R$ 251,75",
                "sales_count": 1
            },
            {
                "id": 11,
                "description": "recusandae rerum facere Boné",
                "brand": "Velasques Comercial Ltda.",
                "revenue": "249.39",
                "formatted_revenue": "R$ 249,39",
                "sales_count": 1
            },
            {
                "id": 10,
                "description": "earum id quo Boné",
                "brand": "Estrada e Serra S.A.",
                "revenue": "170.13",
                "formatted_revenue": "R$ 170,13",
                "sales_count": 2
            },
            {
                "id": 3,
                "description": "Boné New Era 9FIFTY",
                "brand": "New Era",
                "revenue": "159.90",
                "formatted_revenue": "R$ 159,90",
                "sales_count": 1
            },
            {
                "id": 28,
                "description": "itaque ipsa quas Tênis",
                "brand": "Santos e Guerra",
                "revenue": "136.03",
                "formatted_revenue": "R$ 136,03",
                "sales_count": 1
            }
        ],
        "customer_insights": {
            "top_customers": [
                {
                    "id": 36,
                    "name": "Srta. Liz Lilian Cervantes Jr.",
                    "sales_count": 1,
                    "total_spent": 4899.9,
                    "formatted_total": "R$ 4.899,90",
                    "avg_order": 4899.9
                },
                {
                    "id": 26,
                    "name": "Dr. Sabrina Regina Amaral Filho",
                    "sales_count": 1,
                    "total_spent": 1081.7,
                    "formatted_total": "R$ 1.081,70",
                    "avg_order": 1081.7
                },
                {
                    "id": 31,
                    "name": "Ariana Santos",
                    "sales_count": 1,
                    "total_spent": 862.73,
                    "formatted_total": "R$ 862,73",
                    "avg_order": 862.73
                },
                {
                    "id": 25,
                    "name": "Bella Jasmin Vieira",
                    "sales_count": 2,
                    "total_spent": 593.72,
                    "formatted_total": "R$ 593,72",
                    "avg_order": 296.86
                },
                {
                    "id": 14,
                    "name": "Dr. Ian Mauro Marés",
                    "sales_count": 1,
                    "total_spent": 510.68,
                    "formatted_total": "R$ 510,68",
                    "avg_order": 510.68
                },
                {
                    "id": 10,
                    "name": "Srta. Tábata Marinho",
                    "sales_count": 3,
                    "total_spent": 493.58,
                    "formatted_total": "R$ 493,58",
                    "avg_order": 164.52666666666667
                },
                {
                    "id": 8,
                    "name": "Isaac de Arruda",
                    "sales_count": 1,
                    "total_spent": 249.39000000000001,
                    "formatted_total": "R$ 249,39",
                    "avg_order": 249.39000000000001
                },
                {
                    "id": 39,
                    "name": "Sr. Fernando Lira Neto",
                    "sales_count": 1,
                    "total_spent": 159.9,
                    "formatted_total": "R$ 159,90",
                    "avg_order": 159.9
                },
                {
                    "id": 2,
                    "name": "Vitor Henrique",
                    "sales_count": 1,
                    "total_spent": 128.32,
                    "formatted_total": "R$ 128,32",
                    "avg_order": 128.32
                },
                {
                    "id": 12,
                    "name": "Sr. Benjamin Meireles Queirós",
                    "sales_count": 1,
                    "total_spent": 126.41,
                    "formatted_total": "R$ 126,41",
                    "avg_order": 126.41
                }
            ],
            "total_customers": 50,
            "new_customers_period": 50
        }
    }
}
    
    return initialDashboard;
}

