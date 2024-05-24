import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import Paypal from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import Mastercard from "../assets/logo-wall/mastercard.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Paynooer from "../assets/logo-wall/payoneer.png";
import Visa from "../assets/logo-wall/visa.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";
import LogoWall from "../common/LogoWall";

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
        <p className="">
          Connect your other accounts to Kobodrop seamlessly. Kobodrop supports
          200+ <br />
          integrations with other payment platforms like stripe, paypal, paynoer
          and others.
        </p>
      </article>

      <div className="xl:flex xl:justify-center ">
        <LogoWall
          src1={Klarna}
          src2={Stripe}
          src3={Paypal}
          alt1="klarna"
          alt2="stripe"
          alt3="paypal"
        />

        <LogoWall
          src1={Bedc}
          src2={Mastercard}
          src3={Mtn}
          alt1="Bedc"
          alt2="Mastercard"
          alt3="Mtn"
        />
      </div>

      <div className="xl:flex xl:justify-center ">
        <LogoWall
          src1={Airtel}
          src2={Paynooer}
          src3={Visa}
          alt1="Airtel"
          alt2="Paynooer"
          alt3="Visa"
        />

        <LogoWall
          src1={Mobile}
          src2={Ikeja}
          src3={Dstv}
          alt1="Mobile"
          alt2="Ikeja"
          alt3="Dstv"
        />
      </div>
    </section>
  );
}

export default Partners;
