import Image from "next/image";
import React from "react";

const ProductDescription = () => {
  return (
    <div  >
      <div>
        <p className="text-slate-800">
          We work with monitoring programmes to ensure compliance with our
          social, environmental and health and safety standards for our
          garments. To assess compliance, we have developed a programme of
          audits and continuous improvement plans. Made of super-soft cotton,
          the Organic Cotton Cutaway Tank features a high neck and back, and a
          slight curve at the shoulders, which makes it extra flattering. If
          there&#39;s one thing the &#39;90s got right, it&#39;s the basics.
        </p>
        
        <div>
          <h4 className="font-bold mt-10 my-3 text-lg">Outstanding Features</h4>
          <p className="text-slate-800">
            The garments labelled as Committed are products that have been
            produced using sustainable fibres or processes, reducing their
            environmental impact. Umino&#39;s goal is to support the implementation
            of practices more committed to the environment.
          </p>
          <ul className="list-disc text-slate-800">
            <li>
              This take on the classic cardigan showcases a zippered stand
              collar.
            </li>
            <li>Slightly relaxed regular fit.</li>

            <li>Tonal stitching: 98% cotton, 2% elastane.</li>
            <li>Supple and stretch knit with a rich touch of wool.</li>
          </ul>
          <p>
            Committed Collection. 98% cotton fabric. Available in plain and
            patterned. Striped print. Straight design. Off shoulder. Long
            sleeve. Plus Size Available. Using organic cotton means cleaner and
            lower water usage, lower pesticide use, healthier soil.
          </p>
        </div>
        <div>img</div>
      </div>
      <div>
        <h4 className="font-bold mt-10 my-3 text-lg">Outstanding Features</h4>
        <p className="text-slate-800">
          Detailed with a collar and in need of no fussy details or prints to
          catch the eye, it is made from cotton for breathable comfort that&#39;s
          perfect for wrapping over everything, whether day or night and a safer
          working environment for cotton farmers, compared to conventional
          cotton production.
        </p>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <Image
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              width={55}
              height={55}
            />
          </figure>
          <div className="card-body bg-white">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
