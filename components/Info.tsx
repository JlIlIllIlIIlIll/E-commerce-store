import { Product } from "@/types";
import Currency from "@/components/ui/Currency";
import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4 " />
      <div className="items-center gap-x-4">
        <h3 className="font-semibold text-gray-500">Size: </h3>
        <div className="flex h-7 w-10 rounded-md border border-gray-600 items-center justify-center">
          {data?.size?.value}
        </div>
      </div>
      <hr className="my-4 " />
      <div className="items-center gap-x-4">
        <h3 className="font-semibold text-gray-500">Color: </h3>
        <div
          className="flex h-7 w-10 rounded-md border border-gray-600"
          style={{ backgroundColor: data.color.value }}
        />
      </div>
      <hr className="my-4 " />
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
