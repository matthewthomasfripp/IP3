import { getProductPage } from "@/app/actions";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronRightIcon,
  LucideMessageCircleWarning,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logos";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import { badgeVariants } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function ProductPage({
  params,
}: {
  params: { slug: [string, string] };
}) {
  const product = await getProductPage(params);

  return (
    <div className="container relative py-14">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(550px,1fr))] gap-10">
        <div>
          <section className="sticky top-16">
            <div>
              <div className="font-bold text-2xl">{product.brand}</div>
              <div className="text-lg">{product.name}</div>
            </div>
            <div className="text-center pt-10 pr-32 pb-10 pl-32">
              <Image
                className="w-full aspect-square block m-auto max-w-xl"
                src={`https://www.trolley.co.uk/img/product/${product.id}`}
                width={500}
                height={500}
                alt={"test"}
              />
            </div>
          </section>
        </div>
        <div className="space-y-14">
          <section>
            <div className="justify-between font-bold text-2xl mb-3">
              Where to buy
            </div>
            <Table>
              <TableBody>
                {product.shops.map((p, i) => (
                  <TableRow key={i}>
                    <TableCell className="hidden sm:table-cell">
                      {Logo(p.name || "")}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <p className="font-semibold text-base">{p.newPrice}</p>
                        {p.oldPrice && (
                          <p className="text-base line-through">{p.oldPrice}</p>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground font-light mt-[-5px]">
                        {p.eachPrice}
                      </p>
                    </TableCell>
                    <TableCell />
                    <TableCell>
                      <Link href={product.brand}>
                        <Button variant="outline" size="icon">
                          <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow />
              </TableBody>
            </Table>
            <div className="flex gap-2 pt-5">
              <InfoCircledIcon className="h-6 w-6"></InfoCircledIcon>
              <p className="text-sm text-black">
                The prices shown above are available online and may not reflect
                in store.
              </p>
            </div>
          </section>
          <section>
            <div className="justify-between font-bold text-2xl mb-3">
              Supermarket Alternatives
            </div>
            <div className="pl-16">
              <Carousel className="w-full max-w-sm">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </div>
  );
}
