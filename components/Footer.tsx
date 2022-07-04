import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border-t-4 py-5">
      <div className="lg:inline-flex flex-row space-y-0">
        <div className="flex-col pb-5 lg:pr-5">
          <p>© 2022 SEDS at IUPUI. All rights reserved.</p>
          <p className="underline">Privacy policy</p>
          <p className="underline">Notice of Liability</p>
        </div>
        <div className="flex-row">
          <p className="underline">
            <Link href="/about">About</Link>
          </p>
          <p className="underline">
            <Link href="/contact">Contact Us</Link>
          </p>
          <p className="underline">
            <Link href="/blog">Blog</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
