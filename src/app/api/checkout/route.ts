import { NextRequest, NextResponse } from "next/server";


export async function POST (request: NextRequest){
    try {
        const body = await request.json();
        const {items} = body;

        if(!items || items.length === 0){
            return  NextResponse.json({
            error: "No items in cart"
            }, {status:400})
        }

        const lineItems = items.map((item:any) => ({
            price_data: {
                currency: item.product.currency.toLowerCase(),
                product_data: {
                    name:item.product.name,
                    description: item.product.description,
                    images: item.product.images || [item.product.image]
                },
                unit_amount: Math.round(item.product.price * 100)
            },
            quantity: item.quantity
        }))
        
    } catch (error) {
        
    }
}