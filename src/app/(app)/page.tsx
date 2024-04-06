import { Separator } from "@/components/ui/separator"
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header"

import Image from 'next/image'
import { getTopDeals } from "../actions"
import Logo from "@/components/logos"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Share } from "lucide-react"

export default async function IndexPage() {

    const deals = await getTopDeals();

    return (
        <div className="container relative">
            <PageHeader>
                <PageHeaderHeading>Today's Top Deals</PageHeaderHeading>
                <PageHeaderDescription>
                    Your daily roundup of the best supermarket deals and offers.
                </PageHeaderDescription>
            </PageHeader>
            <section className="space-y-14 pl-40 pr-40">
                {deals.map((product, i) => {
                    return (<div key={product.id}>
                        <Card className="flex space-x-8">
                            <a href={product.href || ""} className="flex-none">
                                <div className="relative" >
                                    <div className="absolute w-full h-full shadow-[inset_0px_0px_71px_#00000012]"></div>
                                    <div className="absolute left-0 top-5 pt-3 pr-4 pb-3 pl-4 rounded-r-lg font-bold text-white bg-foreground">
                                        {i + 1}
                                    </div>
                                    <Image
                                        className="p-10 pt-20 overflow-hidden"
                                        src={`https://www.trolley.co.uk/img/product/${product.id}`}
                                        width={400}
                                        height={400}
                                        alt={product.name}
                                    />
                                </div>
                            </a>
                            <div className="pt-6">
                                <a href={product.href || ""} className="space-y-1">
                                    <h3 className="text-2xl font-bold leading-none">
                                        {product.brand}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {product.name}
                                    </p>
                                </a>
                                <Separator className="my-4" />
                                <div>
                                    <h3 className="font-bold mb-4">Available at</h3>
                                    <div className="flex gap-7 items-start">
                                        {product.shops.map(x =>
                                            <a href="" key={x.name}>
                                                {Logo(x.name || "")}
                                                {x.price}
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <Separator className="my-4" />
                                <div>
                                    <h3 className="font-bold mb-2">What people say</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="relative">
                                            <Image
                                                src={`/rating.svg`}
                                                alt="Rating"
                                                height={21}
                                                width={54}
                                                style={{ top: 0, left: 0, overflow: 'hidden' }}
                                            />
                                        </div>
                                        <span className="font-light text-wrap text-xs">{product.reviews}</span>

                                    </div>
                                    <div className="font-light text-sm max-w-[550px]">{product.displayed_review}</div>
                                </div>
                                <Separator className="my-4" />
                                <div className="flex items-center justify-start gap-4 pt-5">
                                    <Button variant="outline">
                                        <PlusCircle className="h-4 w-4 mr-[5px]" />List
                                    </Button>
                                    <Button variant="outline">
                                        <Share className="h-4 w-4 mr-[5px]" />Share
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>)
                })}
            </section>
        </div>
    )
}